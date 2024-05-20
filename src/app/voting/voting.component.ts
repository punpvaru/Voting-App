import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  candidates = [];
  voters = [];
  selectedCandidateId: number;
  selectedVoterId: number;

  constructor(private votingService: VotingService) {}

  ngOnInit(): void {
    this.candidates = this.votingService.getCandidates();
    this.voters = this.votingService.getVoters();
  }
  formSubmitted: boolean = false;
  onCandidateChange(value: string): void {
    this.selectedCandidateId = parseInt(value, 10);
  }

  onVoterChange(value: string): void {
    this.selectedVoterId = parseInt(value, 10);
  }

  castVote(): void {
    this.formSubmitted = true;
  
    if (this.selectedCandidateId != null && this.selectedVoterId != null) {
      this.votingService.castVote(this.selectedCandidateId, this.selectedVoterId);
      this.ngOnInit();
    }
  }
}
