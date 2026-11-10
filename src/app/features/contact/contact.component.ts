import { ContactService } from './../../core/services/contact.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { ToastComponent } from '@app/shared/components/toast/toast.component';

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, ToastComponent],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  contactForm: FormGroup;
  isSubmitting = false;
  showToast = false;
  toastMessage = "";
  toastType: "success" | "error" = "success";

  socials = [
    {
      name: "GitHub",
      url: "https://github.com/junior-gerome",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/junior-gerome",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/juniorNguep",
    },
  ];

  constructor() {
    this.contactForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", [Validators.required, Validators.minLength(3)]],
      message: ["", [Validators.required, Validators.minLength(10)]],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      this.contactService.sendMessage(this.contactForm.value).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.toastMessage = response.message;
          this.toastType = response.success ? "success" : "error";
          this.showToast = true;

          if (response.success) {
            this.contactForm.reset();
            Object.keys(this.contactForm.controls).forEach(key => {
              const control = this.contactForm.get(key);
              control?.setErrors(null);
              control?.markAsPristine();
              control?.markAsUntouched();
            });
          }
        },
        error: (error) => {
          this.isSubmitting = false;
          this.toastMessage =
            "Une erreur inattendue est survenue. N'hésitez pas à me contacter directement par email.";
          this.toastType = "error";
          this.showToast = true;
          console.error("Error sending message:", error);
        },
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
