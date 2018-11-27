/** Created by Prateek Madaan on 26 November 2018 */

/** Constructor function for the Blockchain */

function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
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
    transactions: this.pendingTransactions,
    nonce,
    previousBlockHash,
    hash
  };
  /** Clear out the transactions since waiting transactions are now taken care of by new block*/

  this.pendingTransactions = [];

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
 * @param sender the sender address while still maintaining anonymity
 * @param receiver the recipient address while still maintain anonymity
 * */

Blockchain.prototype.createNewTransaction = function(amount, sender, receiver) {
  /** Create a new transaction */ 
  const newTransaction = {
    amount,
    sender,
    receiver
  };
  /** Append the new transaction to the pendingTransactions */ 
  this.pendingTransactions.push(newTransaction);
  /** Return the number of the block to which this transaction will get added to*/
  return this.getLastBlock()['index'] + 1;
};

/** Export the blockchain for testing and other purposes */
module.exports = Blockchain;
