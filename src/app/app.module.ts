import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteComponent } from './components/note/note.component';
import { FormsModule } from '@angular/forms';
import { NoteModuleModule } from './modules/note-module.module';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { NoteAPIService } from './services/note-api.service';
import { PlaceholderDirective } from './directives/placeholder.directive';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteComponent,
    EditNoteComponent,
    PlaceholderDirective,
    ShortenTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoteModuleModule,
    HttpClientModule
  ],
  providers: [NoteAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
