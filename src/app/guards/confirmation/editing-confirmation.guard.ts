import { CanDeactivateFn } from '@angular/router';
import { EditNoteComponent } from 'src/app/components/edit-note/edit-note.component';
import { NoteComponent } from 'src/app/components/note/note.component';

// This interface is used by Note and EditNote to ensure vars are innstantiated
export interface EditableComponent { 
  editingTitle: boolean;
  editingText: boolean;
}

export const editingConfirmationGuard: CanDeactivateFn<NoteComponent|EditNoteComponent> = (component, currentRoute, currentState, nextState) => {
  return !(component.editingTitle||component.editingText)
  ||confirm('Are you sure you want to leave this page? \nAny unsaved progress will be lost!');
};
