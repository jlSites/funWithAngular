import {Component} from "@angular/core";

@Component({
    selector: 'accept-input-demo',
    template: `
        <div>Pick up a fruit:
            <input type="radio" name="fruits" (click)="onSelectFruit('Tomato')">Tomato
            <input type="radio" name="fruits" (click)="onSelectFruit('Potato')" checked>Potato
            <input type="radio" name="fruits" (click)="onSelectFruit('Avocado')">Avocado
        </div>
        
        <!-- another component with input property -->
        <best-fruit [bestFruit]="selectedFruit"></best-fruit>
    `
})
export class AcceptInputDemoComponent {
    fruits = ['Tomato', 'Potato', 'Avocado'];
    selectedFruit = this.fruits[1];

    onSelectFruit(selected: string) {
        this.selectedFruit = selected;
    }
}