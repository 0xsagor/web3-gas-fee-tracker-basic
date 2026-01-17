import { getProvider } from "./web3.js";

export async function getGasPrice() {
  const provider = getProvider();
  const feeData = await provider.getFeeData();
  return feeData.gasPrice.toString();
}
