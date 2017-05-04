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

    getPet(name: string): Promise<Pet> {
        return this.getPets()
            .then(retPets => retPets.find(findingPet => findingPet.name === name));
    }
}

const MOCK_PETS: Pet[] = [
    { name: 'aaa', age: 1, weight: 11.11 },
    { name: 'bbb', age: 2, weight: 22.22 },
    { name: 'ccc', age: 3, weight: 33.33 },
    { name: 'ddd', age: 4, weight: 44.44 },
    { name: 'eee', age: 5, weight: 55.55 }
];