import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Dog930A',
  tokenName: 'Dog930A',
  tokenSymbol: 'MD',
  hiddenMetadataUri: 'ipfs://QmVdxw4X49nfsPmvpEx3tn1QhohzmZzhTnLnjuSMB8ZTpw/Hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.001,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 0.002,
    maxMintAmountPerTx: 500,
  },
  contractAddress: "0xE59781f04Bb205A190b452350C33Bb3df044F051",
  marketplaceIdentifier: 'MD',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
