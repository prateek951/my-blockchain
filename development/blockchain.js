/** Created by Prateek Madaan on 26 November 2018 */

/** Constructor function for the Blockchain */

function Blockchain() {
  this.chain = [];
  this.latestTransactions = [];
}

/**
 * @desc Utility method to add a new block to the Blockchain
 * @param nonce
 * @param previousBlockHash The hash of the previous block
 * @param hash The hash of the current block
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

/**
 * @desc Utility method to get the last block of the blockchain
 *
 * */

Blockchain.prototype.getLastBlock = function() {
  return this.chain[this.chain.length - 1];
};

/**
 * @desc Utility method to create a new transaction
 * @param amount to be transferred from the sender to the receiver
 * */

Blockchain.prototype.createNewTransaction = function(amount) {};

/** Export the blockchain for testing and other purposes */
module.exports = Blockchain;
