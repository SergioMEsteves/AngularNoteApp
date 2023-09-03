import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditableComponent } from 'src/app/guards/confirmation/editing-confirmation.guard';
import { NoteAPIService } from 'src/app/services/note-api.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnDestroy, OnInit, EditableComponent {
  noteId!: number;
  noteTitle!: string;
  noteText!: string;
  editingTitle = false;
  editingText = false;

  constructor(private route: ActivatedRoute, 
    private noteAPI: NoteAPIService) {}
    private subscribe: any;

  ngOnInit() {
    this.subscribe = this.route.params.subscribe(params => {
      this.noteId = params['noteId'];
    })

    let noteData = document.cookie
      .split('; ')
      .find(cookie => cookie.startsWith(`note${this.noteId}=`))
      ?.split('=')[1].split("||")||'';

      this.noteTitle = decodeURIComponent(noteData[0]);
      this.noteText = decodeURIComponent(noteData[1]);
    }
    
  ngOnDestroy() {
    this.subscribe.unsubscribe();
    // Above prevents data leaks
  }

  titleUpdated() {
    this.editingTitle=!this.editingTitle;
    this.noteAPI.editNote(this.noteId, this.noteTitle.trim(), this.noteText);
  } 

  textUpdated() {
    this.editingText=!this.editingText;
    this.noteText = this.noteText.substring(0, Math.min(this.noteText.length, 2500)).trim()
    this.noteAPI.editNote(this.noteId, this.noteTitle, this.noteText);
  } 
}
