import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {
    constructor() {
        super();

        // set the default 'Content-Type' header
        this.headers.set('Content-Type', 'application/json');
    }
}

// should inject this into app module's providers
export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };