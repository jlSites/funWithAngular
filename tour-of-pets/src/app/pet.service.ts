import { Injectable } from '@angular/core';
import { Pet } from "./pet";
import { Http, Response } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PetService {
    private petUrl = 'http://localhost:1338/pet'; // url to web API

    constructor(private http: Http) { }

    getPets(): Observable<Pet[]> {
        return this.http.get(this.petUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        console.log(">>>res=", res);
        console.log(">>>body=", body);
        console.log(">>>body.data=", body.data);
        return body.data || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getPet(name: string): Observable<Pet> {
        return this.getPets()
            .map(retPets => retPets.find(findingPet => findingPet.name === name));
    }
}

const MOCK_PETS: Pet[] = [
    { name: 'aaa', age: 1, weight: 11.11 },
    { name: 'bbb', age: 2, weight: 22.22 },
    { name: 'ccc', age: 3, weight: 33.33 },
    { name: 'ddd', age: 4, weight: 44.44 },
    { name: 'eee', age: 5, weight: 55.55 }
];