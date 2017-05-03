import { Component } from '@angular/core';
import { Pet } from './pet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPet: Pet;
  pets: Pet[] = [
    { id: 11, name: 'aaa', weight: 11.11 },
    { id: 22, name: 'bbb', weight: 22.22 },
    { id: 33, name: 'ccc', weight: 33.33 },
    { id: 44, name: 'ddd', weight: 44.44 },
    { id: 55, name: 'eee', weight: 55.55 }
  ];

  selectPet(selectedPet: Pet) {
    this.selectedPet = selectedPet;
  }
}
