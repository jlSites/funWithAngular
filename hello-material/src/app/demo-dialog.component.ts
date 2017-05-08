import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from "@angular/material";

@Component({
    selector: 'demo-dialog',
    templateUrl: './demo-dialog.component.html'
})
export class DemoDialogComponent implements OnInit {
    selectedOption: string;

    constructor(private chooseDlg: MdDialog) { }

    ngOnInit() { }

    openDialog() {
        let ddRef = this.chooseDlg.open(DemoDialogFoodPickerComponent);
        ddRef.afterClosed().subscribe(
            rr => {
                this.selectedOption = rr;
            });
    }
}


@Component({
    selector: 'demo-dialog-foodpicker',
    templateUrl: './demo-dialog-foodpicker.component.html'
})
export class DemoDialogFoodPickerComponent implements OnInit {
    constructor(private dialogRef: MdDialogRef<DemoDialogFoodPickerComponent>) { }

    ngOnInit() { }
}