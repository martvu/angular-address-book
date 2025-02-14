import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  contacts: Contact[] = [];

  constructor(private service: ContactsService) {
    this.contacts = this.service.GetContacts();
  }
}
