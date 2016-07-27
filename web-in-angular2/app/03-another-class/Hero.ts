// a class within itself ts
export class Hero {
    id: number;
    name: string;
    hobby: string[];
    address: Address;
}

class Address {
    streetNo: number;
    streetName: string;
}