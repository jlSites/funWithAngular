import { Component } from "@angular/core";
import {Hero} from "./Hero";

@Component({
    selector: 'another-class-demo',
    template: `
        <div>{{hero.name}} details!</div>
        <div>
            <label>id: </label>{{hero.id}}
        </div>
        <div>
            <label>name: </label>
            <input value="{{hero.name}}" placeholder="name"/>
        </div>
        <div>
            <label>address: </label>{{hero.address.streetNo}} {{hero.address.streetName}}
        </div>
    `
})
export class AnotherClassDemoComponent {
    hero: Hero = {id: 23, name: 'Superman', hobby: ['ski', 'footy'], address: {streetNo: 66,streetName: 'Gordon St'}};
    foo: Foo = {id: 33, breed: 'Australian Cattle Dog'};
}

// a class inside a component
class Foo {
    id: number;
    breed: string;
}