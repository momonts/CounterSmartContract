/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomicfoundation/hardhat-toolbox');
require("dotenv").config({path: ".env"})

const PrivateKey = process.env.PrivateKey;
const Url = process.env.ApiKey;

module.exports = {
   defaultNetwork: 'testnet',

   networks: {
      hardhat: {
      },
      testnet: {
         url: Url,
         accounts: [PrivateKey],
         chainId: 1114,
      }
   },
   solidity: {
      compilers: [
        {
           version: '0.8.28',
           settings: {
              evmVersion: 'paris',
              optimizer: {
                 enabled: true,
                 runs: 200,
              },
           },
        },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};
