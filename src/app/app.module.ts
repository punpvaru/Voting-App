import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { VotersComponent } from './voters/voters.component';
import { VotingComponent } from './voting/voting.component';
import { VotingService } from './voting.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    VotersComponent,
    VotingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [VotingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
