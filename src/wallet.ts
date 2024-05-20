import { ethers } from "ethers";
import { Networkish } from "@ethersproject/networks";

type Wallet = {
  chain: string;
  chainID: number;
  explorer: string;
  txURLPrefix: string;
  rpc: string;
  pk: string;
}

export const wallets = [{
  chain: 'BEVM testnet',
  chainID: 11503,
  explorer: 'https://scan-testnet.bevm.io/',
  txURLPrefix: 'https://scan-testnet.bevm.io/tx/',
  rpc: 'https://testnet.bevm.io',
  pk: process.env.PRIVATE_KEY,
}, {
  chain: 'ZAMA devnet',
  chainID: 8009,
  explorer: 'https://main.explorer.zama.ai/',
  txURLPrefix: 'https://main.explorer.zama.ai/tx/',
  rpc: 'https://devnet.zama.ai',
  pk: process.env.PRIVATE_KEY,
}] as Wallet[];

export function getWallet(rpc: string, network: Networkish, pk: string) {
  /*
   * connects to a wallet to provide funds
   */
  const provider = new ethers.providers.JsonRpcProvider(rpc, network);
  return new ethers.Wallet(pk, provider);
}