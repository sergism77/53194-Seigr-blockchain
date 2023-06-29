interface VotingProposal {
  votes: number;
  voters: Set<number>;
}

class ProposalAlreadyExistsError extends Error {
  constructor() {
    super("Proposal already exists");
    this.name = "ProposalAlreadyExistsError";
  }
}

class ProposalNotFoundError extends Error {
  constructor() {
    super("Proposal not found");
    this.name = "ProposalNotFoundError";
  }
}

export class QuadraticVoting {
  private votingProposals: Map<number, VotingProposal>;

  constructor() {
    this.votingProposals = new Map<number, VotingProposal>();
  }

  private isValidNumber(value: number): boolean {
    return Number.isFinite(value) && Number.isSafeInteger(value);
  }

  private validateProposalId(proposalId: number): void {
    if (!this.isValidNumber(proposalId)) {
      throw new Error("Invalid proposalId. Expected a valid number.");
    }
  }

  private validateVotingPower(votingPower: number): void {
    if (!this.isValidNumber(votingPower) || votingPower <= 0) {
      throw new Error("Invalid votingPower. Expected a positive integer.");
    }
  }

  createQuadraticVotingProposal(proposalId: number): void {
    this.validateProposalId(proposalId);

    if (this.votingProposals.has(proposalId)) {
      throw new ProposalAlreadyExistsError();
    }

    this.votingProposals.set(proposalId, { votes: 0, voters: new Set<number>() });
  }

  voteOnQuadraticVotingProposal(proposalId: number, votingPower: number): void {
    this.validateProposalId(proposalId);
    this.validateVotingPower(votingPower);

    const proposal = this.votingProposals.get(proposalId);

    if (!proposal) {
      throw new ProposalNotFoundError();
    }

    if (proposal.voters.has(votingPower)) {
      throw new Error("Same voter cannot vote multiple times for the same proposal");
    }

    proposal.votes += votingPower ** 2;
    proposal.voters.add(votingPower);
  }

  tallyQuadraticVotingVotes(proposalId: number): number {
    this.validateProposalId(proposalId);

    const proposal = this.votingProposals.get(proposalId);

    if (!proposal) {
      throw new ProposalNotFoundError();
    }

    return proposal.votes;
  }

  getAllQuadraticVotingProposals(): Map<number, VotingProposal> {
    return this.votingProposals;
  }

  removeQuadraticVotingProposal(proposalId: number): void {
    this.validateProposalId(proposalId);
    this.votingProposals.delete(proposalId);
  }

  executeQuadraticVotingProposal(proposalId: number): void {
    this.validateProposalId(proposalId);

    const proposal = this.votingProposals.get(proposalId);

    if (!proposal) {
      throw new ProposalNotFoundError();
    }

    // Determine the winning option based on the vote count
    // Perform the necessary actions based on the outcome of the voting
    // ...
  }
}
