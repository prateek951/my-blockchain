/** Created by Prateek Madaan on 26 November 2018 */

function Blockchain() {
  this.chain = [];
  this.latestTransactions = [];
}

/**
 * Utility method to add a new block to the Blockchain
 * */

Blockchain.prototype.addBlock = function(nonce, previousBlockHash, hash) {
  /** Create a block */

  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.latestTransactions,
    nonce,
    previousBlockHash,
    hash
  };
  /** Clear out the transactions since waiting transactions are now taken care of by new block*/

  this.latestTransactions = [];

  /** Push the new block to the blockchain*/
  this.chain.push(newBlock);
  return newBlock;
};

/** Export the blockchain for testing and other purposes */
module.exports = Blockchain;
