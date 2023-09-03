import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { EditNoteComponent } from '../components/edit-note/edit-note.component';
import { NoteListComponent } from '../components/note-list/note-list.component';
import { editingConfirmationGuard } from '../guards/confirmation/editing-confirmation.guard';


let appRoutes: Routes = [
  { path: 'home', 
  component: NoteListComponent, 
  canDeactivate: [editingConfirmationGuard]},

  { path: 'edit/:noteId', 
  component: EditNoteComponent, 
  canDeactivate: [editingConfirmationGuard]},

  { path: '**', 
  redirectTo: 'home'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class NoteModuleModule { }
