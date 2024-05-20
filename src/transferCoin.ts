import { getWallet, wallets } from './wallet';

export type TransferCoin = {
  success: boolean;
  message: string;
  transactions?: {
    chain: string
    txUrl: string
  }[]
}

/*
 * Transfer coin to address. This is native token ie ETH
 * @param {string} address - The address to transfer to
 */
export default async function transferCoin(address: string): Promise<TransferCoin> {
  const transactions = []
  try {
    for (const wallet of wallets) {
      const transaction = await getWallet(wallet.rpc, wallet.chainID, wallet.pk).sendTransaction({
        to: address,
        value: process.env.VALUE as string,
      });
      transactions.push({
        chain: wallet.chain,
        txUrl: wallet.explorer + '/' + transaction.hash
      })
    }

    return {
      success: true,
      message: 'Success',
      transactions,
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: "Unable to Send Transaction",
      transactions
    }
  }
}
