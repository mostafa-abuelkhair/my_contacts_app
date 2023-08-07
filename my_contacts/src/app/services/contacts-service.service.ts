import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsServiceService {

  contacts:{name:string, phoneNumber:string, secondNumber:string, email:string}[] = []

  constructor() { }

  getContacts(){

    this.contacts = JSON.parse(localStorage.getItem("contacts") || "[]");

    return this.contacts;

  }

  updateContacts(){
    localStorage.setItem("contacts", JSON.stringify(this.contacts))
  }




}
