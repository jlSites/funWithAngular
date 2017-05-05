import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { PetService } from "./pet.service";
import { Pet } from "./pet";

@Component({
    selector: 'pet-detail',
    templateUrl: './pet-detail.component.html'
})

export class PetDetailComponent implements OnInit {
    pet: Pet;
    errorMessage: string;

    constructor(private petService: PetService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.petService.getPet(params['name']))
            .subscribe(retPet => this.pet = retPet);
    }

    goBack(): void {
        this.location.back();
    }

    onSubmit(): void {
        console.debug(">>>onSubmit=", this.pet);
        this.petService.postPet(this.pet)
            .subscribe(
            pet => this.goBack(),
            error => this.errorMessage = <any>error);
    }

    onDelete(): void {
        console.debug(">>>onDelete=", this.pet);
        this.petService.deletePet(this.pet.name)
            .subscribe(
            pet => this.goBack(),
            error => this.errorMessage = <any>error);
    }
}