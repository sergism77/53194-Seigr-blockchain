export class QuadraticVoting {
  private votingProposals: Map<number, { votes: number; voters: Set<number> }>;

  constructor() {
    this.votingProposals = new Map<number, { votes: number; voters: Set<number> }>();
  }

  createQuadraticVotingProposal(proposalId: number) {
    if (this.votingProposals.has(proposalId)) {
      throw new Error("Proposal already exists");
    }

    // Initialize the proposal with zero votes and an empty set of voters
    this.votingProposals.set(proposalId, { votes: 0, voters: new Set<number>() });
  }

  voteOnQuadraticVotingProposal(proposalId: number, votingPower: number) {
    const proposal = this.votingProposals.get(proposalId);

    if (!proposal) {
      throw new Error("Proposal not found");
    }

    if (proposal.voters.has(votingPower)) {
      throw new Error("Same voter cannot vote multiple times for the same proposal");
    }

    // Update the votes for the proposal
    proposal.votes += votingPower ** 2;

    // Add the voter to the set of voters
    proposal.voters.add(votingPower);
  }

  tallyQuadraticVotingVotes(proposalId: number): number {
    const proposal = this.votingProposals.get(proposalId);

    if (!proposal) {
      throw new Error("Proposal not found");
    }

    return proposal.votes;
  }

  getAllQuadraticVotingProposals(): Map<number, { votes: number; voters: Set<number> }> {
    return this.votingProposals;
  }

  executeQuadraticVotingProposal(proposalId: number) {
    const proposal = this.votingProposals.get(proposalId);

    if (!proposal) {
      throw new Error("Proposal not found");
    }

    // Determine the winning option based on the vote count
    // Perform the necessary actions based on the outcome of the voting
    // ...
  }
}