import { Injectable } from '@angular/core';

interface Candidate {
  id: string;
  name: string;
  votes: number;
}

interface Voter {
  id: string;
  name: string;
  hasVoted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  private candidates: Candidate[] = [
    { id: "1", name: 'Candidate 1', votes: 0 },
    { id: "2", name: 'Candidate 2', votes: 0 }
  ];

  private voters: Voter[] = [
    { id: "1", name: 'Voter 1', hasVoted: false },
    { id: "2", name: 'Voter 2', hasVoted: false },
    { id: "3", name: 'Voter 3', hasVoted: false },
    { id: "4", name: 'Voter 4', hasVoted: false },
    { id: "5", name: 'Voter 5', hasVoted: false },
  ];

  getCandidates(): Candidate[] {
    return this.candidates;
  }

  getVoters(): Voter[] {
    return this.voters;
  }

  castVote(candidateId: number, voterId: number): void {
    const candidate = this.candidates.find(c => c.id === candidateId.toString());
    const voter = this.voters.find(v => v.id === voterId.toString());
    if (candidate && voter && !voter.hasVoted) {
      candidate.votes++;
      voter.hasVoted = true;
    }
  }
}