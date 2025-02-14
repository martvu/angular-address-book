import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  contactForm: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  addContact(): void {
    const newContact: Contact = {
      id: 0,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactService.AddContact(newContact);
    this.contactForm.reset();
    this.router.navigate(['/contacts']);
  }
}
