import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pet } from './pet';
import { PetService } from "./pet.service";
import { MdDialog, MdDialogRef } from "@angular/material";

@Component({
    selector: 'my-pets',
    templateUrl: './pets.component.html',
    styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
    selectedPet: Pet;
    pets: Pet[];

    constructor(private router: Router, private petService: PetService, public dialog: MdDialog) { }

    ngOnInit(): void {
        this.getPets();
    }

    getPets(): void {
        this.petService.getPets().subscribe(retPets => this.pets = retPets);
    }

    onSelect(pet: Pet) {
        this.selectedPet = pet;
        let dialogRef = this.dialog.open(DialogResultExampleDialog);
        dialogRef.afterClosed().subscribe(result => {
            console.debug('>>result=', result);
        });
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedPet.name]);
    }
}

@Component({
    selector: 'dialog-result-example-dialog',
    templateUrl: './dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
    constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) { }
}