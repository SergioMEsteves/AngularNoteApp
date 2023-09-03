import { Component, Input, OnInit } from '@angular/core';
import { NoteAPIService } from 'src/app/services/note-api.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})

export class NoteListComponent implements OnInit {
  @Input() inputVal = ""; // Bound to value of text input
  noteList: { title: string, text: string }[] = [];

  constructor(private noteAPI: NoteAPIService) {}

  createNote() {
    let noteText = 'Press the "Edit" button to change this text!';
    this.noteAPI.saveNote(this.inputVal.trim(), noteText, this.noteList.length);
    this.noteList.push({ title: this.inputVal, text: noteText });
    this.inputVal = "";
  }

  ngOnInit() { // Lifecycle hook, loads notes on init
    let index = 0;
    let noteData = this.noteAPI.loadNote(index);
    while (noteData!=null) {
      this.noteList.push({ title: noteData[0], text: noteData[1] });
      noteData = this.noteAPI.loadNote(++index);
    }
  }

  deleteNote(index: number) {
    this.noteList.splice(index, 1);
    this.noteAPI.deleteNote(index, this.noteList.length);
  }  

  generateNote() {
    this.noteAPI.generateNotes(Math.floor(Math.random() * 500)).subscribe(
      note => {
        
        this.noteAPI.saveNote(
          note.name,
          note.body,
          this.noteList.length
        );
  
        // Update the noteList array with the fetched data
        this.noteList.push({
          title: note.name,
          text: note.body
        });
      }
    );
  }
  
}
