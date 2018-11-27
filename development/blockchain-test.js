/** Created by Prateek Madaan on 27 November 2018 */

const Blockchain = require("./blockchain");

/** Create a new instance of the Blockchain */

const bitcoin = new Blockchain();

/** Invoke the addBlock method on the bitcoin example instance */

bitcoin.addBlock(2389, "0X2WSFVXRERE", "0ACSVVWESDCFR");

/** Invoke the createNewTransaction method on the bitcoin example instance (still in pending state) */

bitcoin.createNewTransaction(
  100,
  "Alicesfgwefhviglaedas",
  "Bobafscdsewk3123edee"
);

/** Mine a block with the transaction that we created */

bitcoin.addBlock(2444, "0XdafsfavsRE", "0ACS3213SDCFR");

/** Create a new transaction (these are still pending) */

bitcoin.createNewTransaction(
  50,
  "Alicesfgwefhviglaedas",
  "Bobadasewdfewkdfsvjbds"
);
bitcoin.createNewTransaction(
  250,
  "Alicesfgwefhviglaedas",
  "Bobadfsgewfvdscaewds"
);
bitcoin.createNewTransaction(
  50000,
  "Alicesfgwefhviglaedas",
  "Biadsfsewfsacxcsewe"
);

/** Mine the new block with the transactions that we created */

bitcoin.addBlock(100, "WUW4EFS32323QFCKHFE", "32UQWMDEYUGE32yzcxjzz");

console.log(bitcoin);
