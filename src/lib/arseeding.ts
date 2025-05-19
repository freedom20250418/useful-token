import { genNodeAPI, getTokenTagByEver } from "arseeding-js";
import { DataItemCreateOptions } from "arseeding-arbundles";

export type ArseedingInstance = ReturnType<typeof genNodeAPI>;

export const ARSEEDING_WALLET_PRIVATE_KEY =
  process.env.ARSEEDING_WALLET_PRIVATE_KEY;
export const ARSEED_URL =
  process.env.ARSEED_URL || "https://arseed.web3infra.dev";

export const getArseedingInstance = async () => {
  if (!ARSEEDING_WALLET_PRIVATE_KEY) {
    throw new Error("ARSEEDING_WALLET_PRIVATE_KEY is not set");
  }
  const arseedingInstance = await genNodeAPI(ARSEEDING_WALLET_PRIVATE_KEY);
  // everPay 支持的 token tag (chainType-symbol-id) , 默认用: ethereum-eth-0x0000000000000000000000000000000000000000
  const payCurrencyTags = await getTokenTagByEver("eth");
  return {
    arseedingInstance,
    payCurrencyTags,
  };
};

export async function sendAndPay(data: Buffer, options: DataItemCreateOptions) {
  const { arseedingInstance, payCurrencyTags } = await getArseedingInstance();
  const payCurrencyTag = payCurrencyTags[0];
  const res = await arseedingInstance.sendAndPay(
    ARSEED_URL,
    data,
    payCurrencyTag,
    options
  );
  const itemId = res.order.itemId;
  const arseedUrl = `${ARSEED_URL}/${itemId}`;
  const arUrl = `https://arweave.net/${itemId}`;
  return { arUrl, arseedUrl, ...res };
}
