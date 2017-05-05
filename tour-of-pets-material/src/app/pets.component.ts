import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pet } from './pet';
import { PetService } from "./pet.service";

@Component({
    selector: 'my-pets',
    templateUrl: './pets.component.html'
})

export class PetsComponent implements OnInit {
    selectedPet: Pet;
    pets: Pet[];

    constructor(private router: Router, private petService: PetService) { }

    ngOnInit(): void {
        this.getPets();
    }

    getPets(): void {
        this.petService.getPets().subscribe(retPets => this.pets = retPets);
    }

    onSelect(pet: Pet) {
        this.selectedPet = pet;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedPet.name]);
    }
}