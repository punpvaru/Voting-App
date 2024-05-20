import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting.service';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.css']
})
export class VotersComponent implements OnInit {

  voters = [];

  constructor(private votingService: VotingService) {}

  ngOnInit(): void {
    this.voters = this.votingService.getVoters();
  }

}
