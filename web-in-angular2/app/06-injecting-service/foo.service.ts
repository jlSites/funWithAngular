import {Injectable} from "@angular/core";

@Injectable()
export class FooService {
    getStep() {
        return STEP;
    }
}

export const STEP = 2;