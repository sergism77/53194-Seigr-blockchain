import { SEIG } from "./SEIG";

class Proposal {
  id: number;
  title: string;
  description: string;
  votes: number;
  amountToWithdraw?: number;

  constructor(id: number, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.votes = 0;
  }

  setWithdrawalAmount(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid withdrawal amount. Expected a positive number.");
    }
    this.amountToWithdraw = amount;
  }
}

class SeigrHusetDAO {
  proposals: Proposal[];
  seigHolderVotingPower: number;
  seigHolderStakingRewards: number;
  daoFeePercentage: number;
  daoSafeBalance: number;
  lockedBalance: number;

  constructor() {
    this.proposals = [];
    this.seigHolderVotingPower = 0;
    this.seigHolderStakingRewards = 0;
    this.daoFeePercentage = 0;
    this.daoSafeBalance = 0;
    this.lockedBalance = 0;
  }

  setDaoFeePercentage(feePercentage: number) {
    if (feePercentage < 0.05 || feePercentage > 100) {
      throw new Error("Invalid fee percentage. Expected a value between 0 and 100.");
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
    // You will need to implement the transfer logic based on your SEIG token implementation
    // For example:
    // seigToken.transfer(msgSender, daoSafeAddress, amount);

    // Increase the locked balance by the staked amount
    this.lockedBalance += amount;
  }

  createWithdrawProposal(proposalId: number, title: string, description: string, amountToWithdraw: number) {
    if (amountToWithdraw <= 0) {
      throw new Error("Invalid withdrawal amount. Expected a positive number.");
    }

    const proposal = new Proposal(proposalId, title, description);
    proposal.setWithdrawalAmount(amountToWithdraw);

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