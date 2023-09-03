import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Above adds .map to observables

interface note {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class NoteAPIService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  saveNote(title: string, text: string, index: number): void {
    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1); // Cookie will expire after 1 month

    document.cookie = `note${index}=${encodeURIComponent(title)}||${encodeURIComponent(text)}; expires=${expirationDate.toUTCString()}; path=/`;
  }

  loadNote(index: number): string[]|null {
    const cookieValue = document.cookie
      .split('; ')
      .find(cookie => cookie.startsWith(`note${index}=`))
      ?.split('=')[1];

    if (cookieValue) {
      const noteData = cookieValue.split('||');
      return [decodeURIComponent(noteData[0]), decodeURIComponent(noteData[1])];
    }

    return null;
  }

  deleteNote(index: number, noteListLength: number): void {
    // Update the indexes of the cookies
    for (let i = index; i < noteListLength+1; i++) {
      const noteData = this.loadNote(i + 1);
        document.cookie = `note${i}=${noteData==null?'':`${encodeURIComponent(noteData[0])}||${encodeURIComponent(noteData[1])}; path=/;`}`;
        document.cookie = `note${i + 1}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  }

  editNote(index: number, title: string, text: string) {
    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1); // Cookie will expire after 1 month
    document.cookie = `note${index}=${encodeURIComponent(title)}||${encodeURIComponent(text)}; expires=${expirationDate.toUTCString()}; path=/`;
  } 

  generateNotes(id: number) {
    return this.http.get<note>(`${this.apiUrl}/${id}`);
  }
}
