import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  contactForm: FormGroup;
  contact: Contact | null = null;
  contactNotFound = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.GetContactById(contactId).subscribe((contact) => {
      if (contact) {
        this.contact = contact;
        this.contactForm.patchValue({
          firstName: [contact.firstName],
          lastName: [contact.lastName],
          street: [contact.street],
          city: [contact.city],
        });
      }
    });
  }

  updateContact() {
    if (this.contact) {
      const updatedContact: Contact = {
        id: this.contact.id,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      };
      this.contactService.UpdateContact(updatedContact);
      this.router.navigate(['/contacts']);
    } else {
      /* alert('Contact does not exist!'); */
      this.contactNotFound = true;
    }
  }
}
