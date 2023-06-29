import { get } from "lodash";

interface VotingProposal {
  proposalId: number;
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
class QuadraticVoting {
  private votingProposals: { [key: number]: VotingProposal };

  constructor(votingProposals: { [key: number]: VotingProposal }) {
    this.votingProposals = votingProposals;
  }

  getAllQuadraticVotingProposals(): { [key: number]: VotingProposal } {
    if (Object.keys(this.votingProposals).length === 0) {
      throw new Error("No quadratic voting proposals available.");
    }

    return this.votingProposals;
  }

  removeQuadraticVotingProposal(proposalId: number): boolean {
    this.validateProposalId(proposalId);

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

  executeQuadraticVotingProposal(proposalId: number): void {
    this.validateProposalId(proposalId);

    if (!this.votingProposals.hasOwnProperty(proposalId)) {
      throw new ProposalNotFoundError(proposalId);
    }

    // Add implementation logic here
    this.tallyQuadraticVotingVotes(proposalId);
    const proposals = this.getAllQuadraticVotingProposals();
    const proposalWithHighestVotes = this.getProposalWithHighestVotes(proposals);
    this.removeQuadraticVotingProposal(proposalWithHighestVotes.proposalId);

    // Remove the throw statement once the implementation is complete
    throw new Error("Execution logic not fully implemented");
  }

  private validateProposalId(proposalId: number): void {
    if (typeof proposalId !== "number" || !Number.isInteger(proposalId) || proposalId <= 0) {
      throw new Error("Invalid proposalId. Expected a positive integer.");
    }
  }

  private getProposalWithHighestVotes(proposals: { [key: number]: VotingProposal }): VotingProposal {
    let highestVotes = 0;
    let highestVotesProposal: VotingProposal | null = null;

    for (const proposalId in proposals) {
      const proposal = proposals[proposalId];
      if (proposal.votes > highestVotes) {
        highestVotes = proposal.votes;
        highestVotesProposal = proposal;
      }
    }

    if (highestVotesProposal === null) {
      throw new Error("No proposal found with the highest votes.");
    }

    return highestVotesProposal;
  }

  private tallyQuadraticVotingVotes(proposalId: number): number {
    const proposal = this.votingProposals[proposalId];

    if (!proposal) {
      throw new ProposalNotFoundError(proposalId);
    }

    // Implementation logic to tally votes for a proposal
    // Create the tallying logic for our quadratic voting here
    //we need to get the number of votes and the number of voters from the proposal
    getNumberOfVoters(proposal);
    getNumberOfVotes(proposal);
    //we need to get the square root of the number of voters
    getSquareRootOfVoters(proposal);
    //we need to multiply the square root of the number of voters by the number of votes
    multiplySquareRootByVotes(proposal);
    //we need to return the result of the multiplication
    const resultOfMultiplication = getSquareRootOfVoters(proposal) * getNumberOfVotes(proposal);

    return resultOfMultiplication;


  }
}
function getNumberOfVoters(proposal: VotingProposal) {
  //we need to get the number of voters from the proposal
  const numberOfVoters = proposal.voters.size;
  return numberOfVoters;
  
}

function getNumberOfVotes(proposal: VotingProposal) {
  //we need to get the number of votes from the proposal
  const numberOfVotes = proposal.votes;
  return numberOfVotes;
}

function getSquareRootOfVoters(proposal: VotingProposal) {
  //we need to get the square root of the number of voters
  const squareRootOfVoters = Math.sqrt(proposal.voters.size);
  return squareRootOfVoters;
}

function multiplySquareRootByVotes(proposal: VotingProposal) {
  //we need to multiply the square root of the number of voters by the number of votes
  const resultOfMultiplication = getSquareRootOfVoters(proposal) * getNumberOfVotes(proposal);
  return resultOfMultiplication;
}

