import { Injectable } from '@angular/core';
import { Pet } from "./pet";

@Injectable()
export class PetService {
    getPets(): Promise<Pet[]> {
        return Promise.resolve(MOCK_PETS);
    }

    getPetsSlowly(): Promise<Pet[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getPets()), 2000);
        });
    }
}

const MOCK_PETS: Pet[] = [
    { id: 11, name: 'aaa', weight: 11.11 },
    { id: 22, name: 'bbb', weight: 22.22 },
    { id: 33, name: 'ccc', weight: 33.33 },
    { id: 44, name: 'ddd', weight: 44.44 },
    { id: 55, name: 'eee', weight: 55.55 }
];