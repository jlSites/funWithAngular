import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import { PetService } from "./pet.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    selectedPet: Pet;
    pets: Pet[];

    constructor(private petService: PetService) { }

    ngOnInit(): void {
        this.getPets();
    }

    getPets(): void {
        this.petService.getPets().then(retPets => this.pets = retPets.slice(1, 5));
    }

    selectPet(selectedPet: Pet) {
        this.selectedPet = selectedPet;
    }
}