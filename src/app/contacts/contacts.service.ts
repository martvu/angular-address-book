import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACTS } from '../data/contacts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[] = CONTACTS;

  public GetContacts(): Contact[] {
    return this.contacts;
  }

  public GetContactById(contactId: number): Observable<Contact | undefined> {
    const contact = this.contacts.find((c) => c.id === contactId);
    return of(contact);
  }

  public AddContact(newContact: Contact) {
    const length = this.contacts.length;
    const newId = length > 0 ? this.contacts[length - 1].id + 1 : 1;

    newContact.id = newId;
    this.contacts.push(newContact);
  }

  public UpdateContact(updatedContact: Contact) {
    let index = this.contacts.findIndex((c) => c.id === updatedContact.id);
    if (index < 0 || index > this.contacts.length) return;
    this.contacts[index] = updatedContact;
  }
}
