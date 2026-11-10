import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { ContactForm, ContactResponse } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private http = inject(HttpClient);

  // Clé d'anonymisation FormSubmit activée
  private formSubmitToken = 'db1a245ab88449a1664fe36b3f23e1f3';
  private formSubmitUrl = `https://formsubmit.co/ajax/${this.formSubmitToken}`;

  sendMessage(formData: ContactForm): Observable<ContactResponse> {
    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      _subject: `[Portfolio Junior Gerome] Nouveau message : ${formData.subject}`,
      _template: 'table',
      _captcha: 'false'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post<any>(this.formSubmitUrl, payload, { headers }).pipe(
      map((res) => {
        const isSuccess = res && (res.success === true || res.success === 'true');
        return {
          success: isSuccess,
          message: isSuccess
            ? 'Votre message a bien été envoyé ! Je vous répondrai dans les plus brefs délais.'
            : (res?.message || 'Une erreur est survenue lors de l\'envoi.')
        };
      }),
      catchError((error) => {
        console.error('Erreur transmission email:', error);
        return of({
          success: false,
          message: 'Impossible de transmettre le message pour le moment. Vous pouvez me contacter directement à jnguepmanyo@gmail.com.'
        });
      })
    );
  }
}
