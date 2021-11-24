require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember mistake good clinic blue gasp'; 
let testAccounts = [
"0xfc84f151f677512c7632232adf0b360d6c58da7d2baf14b1ecef291afd110dea",
"0x946a7a3834768519ec6634ab988ec72fca7d8da5333630e52d2eb574b32357a2",
"0xb285b55fd880f6394010bfc424850360f7a948df03aee9f8c0e438eec4005da1",
"0x3dc0788f4580926fb6717fc4705362c5de7605e9f8dc53fdff78b383c1204791",
"0x3351840097ff6ed135d78f6205bc75ffb76f890ff2fb786fefaa7e4b8f139797",
"0xce5510e243e4401d098241a4649e6428d878002f48d8745afcdf37cb942c1084",
"0xcad1a24d64fd4a912833bbc870f5fb9660fdd3ac06925a5239bac8309206a7ac",
"0xf57de6a019e60fddb08337ad4de339f3c0e6b0552ecc100bcb375ae75ad699e0",
"0xa0a003133648471ab62c85884ead3664e17740b1110cca6eb31046572ffcbfca",
"0x8eef1934c9c1066dc985a2eac444d454effc0bfe23926a86969051e3fb9870c5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

