import { Component } from '@angular/core';

@Component({
    selector: 'key-up1',
    template: `
    <input (keyup)="onKey2($event)">
    <p>{{keyMsg}}</p>
    `
})
export class KeyUpComponent_v1 {
    keyMsg = '';
    // without type info
    onKey(event: any): void {
        this.keyMsg += event.target.value + ' | ';
    }

    // with type info
    onKey2(event: KeyboardEvent): void {
        this.keyMsg += (<HTMLInputElement>event.target).value + ' | ';
    }
}

//////
@Component({
    selector: 'key-up2',
    template: `
    <input #nameInput (keyup)="onKey(nameInput.value)">
    <p>{{keyMsg}}</p>
    `
})
export class KeyUpComponent_v2 {
    keyMsg = '';
    onKey(boxValue: string): void {
        this.keyMsg += boxValue + ' | ';
    }
}

//////
@Component({
    selector: 'key-up3',
    template: `
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{keyEnterMsg}}</p>
    `
})
export class KeyUpComponent_v3 {
    keyEnterMsg = '';
    onEnter(boxValue: string): void {
        this.keyEnterMsg = boxValue;
    }
}

//////
@Component({
    selector: 'key-up4',
    template: `
    <input #box 
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">
    <p>{{keyEnterMsg}}</p>
    `
})
export class KeyUpComponent_v4 {
    keyEnterMsg = '';
    update(boxValue: string): void {
        this.keyEnterMsg = boxValue;
    }
}