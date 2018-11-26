/** Created by Prateek Madaan on 26 November 2018 */

function Blockchain() {
  this.chain = [];
  this.transactions = [];
}

/**
 * Utility method to add a new block to the Blockchain
 * */

Blockchain.prototype.addBlock = (nonce, previousBlockHash, hash) => {
  /** Create a block */

  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.transactions,
    nonce,
    hash,
    previousBlockHash
  };
  /** Clear out the transactions since waiting transactions are now taken care of by new block*/

  this.transactions = [];
  
  /** Push the new block to the blockchain*/
  this.chain.push(newBlock);
  return newBlock;
};
