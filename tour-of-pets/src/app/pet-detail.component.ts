import { Component, OnInit, Input } from '@angular/core';
import { Pet } from "./pet";

@Component({
    selector: 'pet-detail',
    templateUrl: './pet-detail.component.html'
})

export class PetDetailComponent implements OnInit {
    @Input() pet: Pet;

    constructor() { }

    ngOnInit() { }
}