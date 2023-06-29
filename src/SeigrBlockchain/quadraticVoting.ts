interface VotingProposal {
  votes: number;
  voters: Set<number>;
}

interface ProposalNotFoundError extends Error {
  proposalId: number;
}

class ProposalAlreadyExistsError extends Error {
  constructor() {
    super("Proposal already exists");
    this.name = "ProposalAlreadyExistsError";
  }
}

class ProposalNotFoundError extends Error {
  constructor(proposalId: number) {
    super(`Proposal not found: ${proposalId}`);
    this.name = "ProposalNotFoundError";
    this.proposalId = proposalId;
  }
}

/**
 * QuadraticVoting class represents a quadratic voting system for proposals.
 */
export class QuadraticVoting {
  private readonly votingProposals: { [key: number]: VotingProposal };

  /**
   * Creates an instance of QuadraticVoting.
   */
  constructor() {
    this.votingProposals = {};
  }

  /**
   * Creates a quadratic voting proposal with the given proposalId.
   * @param proposalId - The ID of the proposal.
   * @throws {ProposalAlreadyExistsError} If a proposal with the same ID already exists.
   */
  createQuadraticVotingProposal(proposalId: number): void {
    if (this.votingProposals.hasOwnProperty(proposalId)) {
      throw new ProposalAlreadyExistsError();
    }

    this.votingProposals[proposalId] = { votes: 0, voters: new Set<number>() };
  }

  /**
   * Votes on a quadratic voting proposal with the given proposalId using the specified votingPower.
   * @param proposalId - The ID of the proposal.
   * @param votingPower - The voting power of the voter.
   * @throws {ProposalNotFoundError} If the proposal with the given ID doesn't exist.
   */
  voteOnQuadraticVotingProposal(proposalId: number, votingPower: number): void {
    if (!this.votingProposals.hasOwnProperty(proposalId)) {
      throw new ProposalNotFoundError(proposalId);
    }

    const proposal = this.votingProposals[proposalId];

    if (proposal.voters.has(votingPower)) {
      throw new Error("Same voter cannot vote multiple times for the same proposal");
    }

    proposal.votes += votingPower ** 2;
    proposal.voters.add(votingPower);
  }

  /**
   * Retrieves the total votes for a quadratic voting proposal with the given proposalId.
   * @param proposalId - The ID of the proposal.
   * @returns The total votes for the proposal.
   * @throws {ProposalNotFoundError} If the proposal with the given ID doesn't exist.
   */
  tallyQuadraticVotingVotes(proposalId: number): number {
    if (!this.votingProposals.hasOwnProperty(proposalId)) {
      throw new ProposalNotFoundError(proposalId);
    }

    return this.votingProposals[proposalId].votes;
  }

  /**
   * Retrieves all the quadratic voting proposals and their respective vote counts.
   * @returns A map of proposalId to VotingProposal.
   */
  getAllQuadraticVotingProposals(): { [key: number]: VotingProposal } {
    if (Object.keys(this.votingProposals).length === 0) {
      throw new Error("No quadratic voting proposals available.");
    }
  
    return this.votingProposals;
  }

  /**
   * Removes a quadratic voting proposal with the given proposalId.
   * @param proposalId - The ID of the proposal.
   * @returns true if the proposal was successfully removed, false if the proposal with the given ID doesn't exist.
   * @throws {ProposalNotFoundError} If the proposalId parameter is not a valid number or if the proposal with the given ID doesn't exist.
   */
     

  removeQuadraticVotingProposal(proposalId: number): boolean {
    if (typeof proposalId !== "number" || !Number.isInteger(proposalId) || proposalId <= 0) {
      throw new Error("Invalid proposalId. Expected a positive integer.");
    }
  
    if (!this.votingProposals.hasOwnProperty(proposalId)) {
      return false; // Proposal doesn't exist
    }
  
    try {
      delete this.votingProposals[proposalId];
      return true; // Proposal was successfully removed
    } catch (error) {
      console.error("Failed to remove proposal:", error);
      return false;
    }
  }

  /**
   * Executes the quadratic voting proposal with the given proposalId.
   * @param proposalId - The ID of the proposal.
   * @throws {ProposalNotFoundError} If the proposalId parameter is not a valid number or if the proposal with the given ID doesn't exist.
   * @throws {Error} If the execution logic is not implemented.
   */
  executeQuadraticVotingProposal(proposalId: number): void {
    if (typeof proposalId !== "number" || !Number.isInteger(proposalId) || proposalId <= 0) {
      throw new Error("Invalid proposalId. Expected a positive integer.");
    }
  
    if (!this.votingProposals.hasOwnProperty(proposalId)) {
      throw new ProposalNotFoundError(proposalId);
    }

    // Add implementation logic here
    // use the tallyQuadraticVotingVotes function to get the total votes for the proposal and then use the getAllQuadraticVotingProposals function to get the proposal with the highest votes.
    this.tallyQuadraticVotingVotes(proposalId);
    this.getAllQuadraticVotingProposals();
    
    // Then use the removeQuadraticVotingProposal function to remove the proposal with the highest votes.
    this.removeQuadraticVotingProposal(proposalId);

  // Remove the throw statement once the implementation is complete
  throw new Error("Execution logic not implemented");
}
}
