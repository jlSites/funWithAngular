import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: "Martins" },
            { id: 22, name: "Batman" },
            { id: 33, name: "Superman" },
            { id: 44, name: "Antman" },
            { id: 55, name: "Batwoman" },
            { id: 66, name: "Green" },
            { id: 77, name: "雷军" },
            { id: 88, name: "Gary" }
        ];
        return { heroes }
    }
}