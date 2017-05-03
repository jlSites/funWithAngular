import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import { PetService } from "./pet.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedPet: Pet;
  pets: Pet[];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().then(retPets => this.pets = retPets);
  }

  selectPet(selectedPet: Pet) {
    this.selectedPet = selectedPet;
  }
}
