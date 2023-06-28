import { SEIG } from "./SEIG";

class ethereumHusetDAO {
  proposals: Proposal[];
  seigHolderVotingPower: number;
  seigHolderStakingRewards: number;

  constructor() {
    this.proposals = [];
    this.seigHolderVotingPower = 0;
    this.seigHolderStakingRewards = 0;
  }

  getDAOProposals() {
    return this.proposals;
  }

  voteOnProposal(proposalId: number) {
    // Code to allow users with 10 SEIG to vote on proposal
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
}

class Proposal {
  id: number;
  title: string;
  description: string;
  votes: number;

  constructor(id: number, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.votes = 0;
  }
}

const VOTING_TIME = 604800;

function fundDAO() {
  if (unstakedSEIG) {
    this.seigHolderStakingRewards += unstakedSEIG.safe.balance;
    unstakedSEIG.safe.balance = 0;
  }
}

let syncing = false;
function startSync() {
  // code to start syncing ethereum contract
  syncing = true;
}
function stopSync() {
  // code to stop syncing ethereum contract
  syncing = false;
}

module.exports = ethereumHusetDAO;

function bridgeToEthereum() {
  // Code to bridge to Ethereum
  console.log("Bridging to Ethereum");
}

function bridgeFromEthereum() {
  // Code to bridge from Ethereum
  console.log("Bridging from Ethereum");
}

module.exports = ethereumHusetDAO;
