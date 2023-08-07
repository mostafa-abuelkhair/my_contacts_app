import { Component } from '@angular/core';
import { ContactsServiceService } from '../services/contacts-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  contacts;

  editIndex=0;

  searchValue = "";

  contact = {name:"", phoneNumber:"", secondNumber:"", email:""} 

  constructor(  private contactsService:ContactsServiceService  ){
    this.contacts = contactsService.getContacts();
  }

  contactAdd(){
    this.contacts.push({...this.contact});
    this.contactsService.updateContacts();
  }

  newContact(){

  }

  editContact(i:number){
    this.contact = {...this.contacts[i]};
    this.editIndex = i;
  }

  deleteContact(i:number){
    this.contacts.splice(i,1);
    this.contactsService.updateContacts();
  }

  saveEdits(){
     this.contacts[this.editIndex] = {...this.contact};
     this.contactsService.updateContacts();
  }

  show(i:number){

    const contact = JSON.stringify(this.contacts[i]);

    return contact.search(this.searchValue) === -1 ? false:true;

  }

}
