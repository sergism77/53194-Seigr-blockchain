import { QuadraticVoting } from "./quadraticVoting";

interface Proposal {
  id: number;
  title: string;
  description: string;
  votes: number;
  amountToWithdraw?: number;
}

export class Governance {
  private proposals: Proposal[];
  private quadraticVoting: QuadraticVoting;

  constructor() {
    this.proposals = [];
    this.quadraticVoting = new QuadraticVoting();
  }

  createProposal(proposalId: number, title: string, description: string, options: string[]) {
    const proposal: Proposal = {
      id: proposalId,
      title,
      description,
      votes: 0
    };

    this.proposals.push(proposal);
    this.quadraticVoting.createQuadraticVotingProposal(proposalId);
  }

  createWithdrawProposal(proposalId: number, title: string, description: string, amountToWithdraw: number) {
    if (amountToWithdraw <= 0) {
      throw new Error("Invalid withdrawal amount. Expected a positive number.");
    }

    const proposal: Proposal = {
      id: proposalId,
      title,
      description,
      votes: 0,
      amountToWithdraw
    };

    this.proposals.push(proposal);
    this.quadraticVoting.createQuadraticVotingProposal(proposalId);
  }

  voteOnProposal(proposalId: number, option: string, votingPower: number) {
    if (votingPower <= 0) {
      throw new Error("Invalid voting power. Expected a positive number.");
    }

    const proposal = this.proposals.find((p) => p.id === proposalId);
    if (!proposal) {
      throw new Error("Proposal not found");
    }

    proposal.votes += votingPower;
    this.quadraticVoting.voteOnQuadraticVotingProposal(proposalId, votingPower);
  }

  tallyVotes(proposalId: number) {
    const votes = this.quadraticVoting.tallyQuadraticVotingVotes(proposalId);
    const proposal = this.proposals.find((p) => p.id === proposalId);
    if (proposal) {
      proposal.votes = votes;
    }
  }

  executeProposal(proposalId: number) {
    const proposal = this.proposals.find((p) => p.id === proposalId);
    if (!proposal) {
      throw new Error("Proposal not found");
    }

    // Execute the proposal based on your specific business logic
  }
}

class SeigrHusetDAO {
  private proposals: Proposal[];
  private seigHolderVotingPower: number;
  private seigHolderStakingRewards: number;
  private daoFeePercentage: number;
  private daoSafeBalance: number;
  private lockedBalance: number;
  private archivedProposals: Proposal[];

  constructor() {
    this.proposals = [];
    this.seigHolderVotingPower = 0;
    this.seigHolderStakingRewards = 0;
    this.daoFeePercentage = 0;
    this.daoSafeBalance = 0;
    this.lockedBalance = 0;
    this.archivedProposals = [];
  }

  setDaoFeePercentage(feePercentage: number) {
    if (feePercentage < 0.05 || feePercentage > 100) {
      throw new Error("Invalid fee percentage. Expected a value between 0.05 and 100.");
    }
    this.daoFeePercentage = feePercentage;
  }

  getDAOProposals() {
    return this.proposals;
  }

  voteOnProposal(proposalId: number) {
    const seigBalance = this.seigHolderStakingRewards + this.seigHolderVotingPower;
    if (seigBalance < 10) {
      throw new Error("Not enough SEIG to vote");
    }
    const proposal = this.proposals.find((p) => p.id === proposalId);
    if (!proposal) {
      throw new Error("Proposal not found");
    }
    proposal.votes += seigBalance;
    this.seigHolderVotingPower = 0;
  }

  requiredVotesToPass(proposalId: number) {
    const proposal = this.proposals.find((p) => p.id === proposalId);
    if (!proposal) {
      throw new Error("Proposal not found");
    }
    return proposal.votes / 2;
  }

  withdrawFromDAO(proposalId: number) {
    const proposal = this.proposals.find((p) => p.id === proposalId);
    if (!proposal) {
      throw new Error("Proposal not found");
    }
    if (proposal.votes < this.requiredVotesToPass(proposalId)) {
      throw new Error("Proposal not passed");
    }
    if (proposal.amountToWithdraw) {
      this.daoSafeBalance -= proposal.amountToWithdraw;
      this.lockedBalance -= proposal.amountToWithdraw;
      proposal.amountToWithdraw = undefined;
    }

    // Transfer the amount from the DAO safe to the voted wallet's address
    // Implement the transfer
  }

  archiveProposal(proposalId: number) {
    const proposal = this.proposals.find((p) => p.id === proposalId);

    if (!proposal) {
      throw new Error("Proposal not found");
    }

    this.archivedProposals.push(proposal);

    // Remove the proposal from the active proposals list
    this.proposals = this.proposals.filter((p) => p.id !== proposalId);
  }

  getArchivedProposals() {
    return this.archivedProposals;
  }

  getDAOSafeBalance() {
    return this.daoSafeBalance;
  }

  getLockedBalance() {
    return this.lockedBalance;
  }

  getSeigHolderVotingPower() {
    return this.seigHolderVotingPower;
  }

  processTransaction(transactionAmount: number) {
    if (this.daoFeePercentage === 0.05) {
      // Minimum fee, process the entire transaction amount
      // according to your business logic
      // ...
      console.log(`Transaction processed. Amount: ${transactionAmount}`);
    } else {
      const daoFeeAmount = (transactionAmount * this.daoFeePercentage) / 100;
      const daoFundingAmount = transactionAmount - daoFeeAmount;

      // Add daoFeeAmount to DAO safe balance
      this.daoSafeBalance += daoFeeAmount;

      // Stake the daoFundingAmount in the DAO safe
      this.stakeInDAOSafe(daoFundingAmount);

      console.log(`Transaction processed. DAO Fee: ${daoFeeAmount}, DAO Funding: ${daoFundingAmount}`);
    }
  }

  stakeInDAOSafe(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid staking amount. Expected a positive number.");
    }

    // Transfer the amount from the SEIG token to the DAO safe
    // Implement the transfer logic based on your SEIG token implementation
    // seigToken.transfer(daoSafeAddress, amount);

    // Increase the locked balance by the staked amount
    this.lockedBalance += amount;
  }

  createWithdrawProposal(proposalId: number, title: string, description: string, amountToWithdraw: number) {
    if (amountToWithdraw <= 0) {
      throw new Error("Invalid withdrawal amount. Expected a positive number.");
    }

    const proposal: Proposal = {
      id: proposalId,
      title,
      description,
      votes: 0,
      amountToWithdraw,
    };

    this.proposals.push(proposal);
  }

  voteOnWithdrawProposal(proposalId: number) {
    const seigBalance = this.seigHolderStakingRewards + this.seigHolderVotingPower;
    if (seigBalance < 10) {
      throw new Error("Not enough SEIG to vote");
    }

    const proposal = this.proposals.find((p) => p.id === proposalId);
    if (!proposal) {
      throw new Error("Proposal not found");
    }

    proposal.votes += seigBalance;
    this.seigHolderVotingPower = 0;
  }

  processWithdrawProposal(proposalId: number) {
    const proposal = this.proposals.find((p) => p.id === proposalId);
    if (!proposal || !proposal.amountToWithdraw) {
      throw new Error("Withdraw proposal not found");
    }

    // Check if the proposal to withdraw the specified amount has passed
    // You will need to implement the proposal and voting mechanism
    // For example:
    // const requiredVotes = calculateRequiredVotesForWithdrawal();
    // if (proposal.votes < requiredVotes) {
    //   throw new Error("Proposal to withdraw the amount has not passed.");
    // }

    // Withdraw the amount from the DAO safe
    // You will need to implement the withdrawal logic based on your SEIG token implementation
    // For example:
    // seigToken.transfer(daoSafeAddress, msgSender, proposal.amountToWithdraw);

    // Decrease the locked balance by the withdrawn amount
    this.lockedBalance -= proposal.amountToWithdraw;

    // Remove the proposal from the list
    this.proposals = this.proposals.filter((p) => p.id !== proposalId);
  }
}

export default SeigrHusetDAO;
