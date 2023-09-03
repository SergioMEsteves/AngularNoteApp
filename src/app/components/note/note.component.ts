import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EditableComponent } from 'src/app/guards/confirmation/editing-confirmation.guard';
import { NoteAPIService } from 'src/app/services/note-api.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements EditableComponent{
    @Input() title!: string;
    @Input() text!: string;
    @Input() index!: number;
    @Output() delete: EventEmitter<void> = new EventEmitter<void>();
    editingTitle = false;
    router!: Router;
    editingText=false; // This is only here for use by routing guard

    constructor(private noteAPI: NoteAPIService) {}

    deleteNote() {
        window.confirm(
          'Are you sure you want to delete this note?'
        ) && this.delete.emit();
    }

    titleUpdated() {
      this.editingTitle=!this.editingTitle;
      this.noteAPI.editNote(this.index, this.title.trim(), this.text);
    } 
  }
