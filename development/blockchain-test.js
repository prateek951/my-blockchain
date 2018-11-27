/** Created by Prateek Madaan on 26 November 2018 */

const Blockchain = require("./blockchain");

/** Create a new instance of the Blockchain */

const bitcoin = new Blockchain();

/** Invoke the addBlock method on the bitcoin example instance */ 
bitcoin.addBlock(2389,'0X2WSFVXRERE','0ACSVVWESDCFR');
bitcoin.addBlock(239,'0X2WSadcsvfe','0ACeqqewSDCFR');
bitcoin.addBlock(2444,'0XdafsfavsRE','0ACS3213SDCFR');

/** Invoke the createNewTransaction method on the bitcoin example instance */ 
bitcoin.createNewTransaction(100,'Alicesfgwefhviglaedas','Bobafscdsewk3123edee')

console.log(bitcoin);