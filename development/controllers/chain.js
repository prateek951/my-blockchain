/** Created by Prateek Madaan on 27 November 2018*/

const Blockchain = require("../blockchain");
const { OK } = require("http-status-codes");
const bitcoin = new Blockchain();

exports.retrieveBlockchain = (req, res, next) => {
  console.log("hooked up...");
  res.status(OK).send(bitcoin);
};

exports.createTransaction = (req, res, next) => {
  /** Tap the amount, sender and the receiver from request body  */

  const { amount, sender, receiver } = req.body;

  const blockIndex = bitcoin.createNewTransaction(amount, sender, receiver);
  res
    .status(OK)
    .json({ message: `Transaction will be added in block ${blockIndex}` });
};

exports.mineBlock = (req, res, next) => {
  console.log("hooked up...");
};
