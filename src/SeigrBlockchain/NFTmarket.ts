import { NFT } from "../NFT";

export class NFTmarketplace {
  nfts: NFT[];
  // NFT Marketplace class implementation

  constructor() {
    this.nfts = [];
  }

  sellNFT(nft: NFT, price: number) {
    const fee = price * 0.005;
    this.seigrHusetDAOFeesSafe.receiveFees(fee);
    // rest of the method implementation
  }

  buyNFT(nft: NFT, price: number) {
    const index = this.nfts.indexOf(nft);
    if (index === -1) {
      throw new Error("NFT not found");
    }
    const seller = nft.owner;
    const buyer = "buyer_wallet_address";
    const fee = price * 0.005;
    const total = price + fee;
    if (buyer.balance < total) {
      throw new Error("Insufficient funds");
    }
    seller.balance += price;
    this.seigrHusetDAOFeesSafe.receiveFees(fee);
    nft.owner = buyer;
    this.nfts.splice(index, 1);
    buyer.nfts.push(nft);
  }
}
Implement Lock & Mint bridge
/**
 * This class represents the NFT Marketplace.
 * It contains methods for selling and buying NFTs.
 */
