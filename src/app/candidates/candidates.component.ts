import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidates = [];

  constructor(private votingService: VotingService) {}

  ngOnInit(): void {
    this.candidates = this.votingService.getCandidates();
  }

}
