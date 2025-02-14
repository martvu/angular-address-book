import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  contact: Contact | null = null;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactsService
  ) {}

  ngOnInit(): void {
    const contactId = Number(this.route.snapshot.paramMap.get("id"))
    this.contactService.GetContactById(contactId).subscribe((data) => {
      this.contact = data!; 
    })
  }
}
