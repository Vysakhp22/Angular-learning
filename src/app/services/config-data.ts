import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class Configdata {
    public emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    public mobileRegex: RegExp = /^\d{10}$/;
}