require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot chaos renew pitch exact gesture muscle army gift'; 
let testAccounts = [
"0xed3f48c1575e4e41e6d051184db0953ecc79acc0a5c98002e63689bd37441ea8",
"0x0dfee7d121ce71421c8c0c21c260a203f0c9b53ae557401de4e07a7d6a49a390",
"0x12a46e2481016dd055eccaa65aa455053c253ae01c370168270f76306970e6a2",
"0x239fa7978c141f8977d642feea7b011a922e2b405eeb0936344a3e672c02b78f",
"0xda4a855989f7608c7f66ef097dcddc8dafa4a206b7031ac761b395888c76688d",
"0x56ba9f54067930da2bddc582bff51eec6c8b5d5b0ec1bd6bb039a96b5318dcdc",
"0xaaa7b946ce68e2f99c3e3dd39befe15e6c990063b77a79cb350ebe83ab1382ba",
"0xc1ad6232d89358c0039ef302e66d8833b1902bd8f78425de03ee29d130f45fe5",
"0x7e6866ce29e7dba7ad1efab2471adb3c2cc62101937c5a18d6de8848b7b36544",
"0x3f3079cc5d9def4fa69a6b46bbe37a38ad4a6e4e2e0cdfb82ff8cd2487dd45d4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


