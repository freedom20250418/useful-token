export type GeckoterminalTokenInfo = {
  id: string;
  type: string;
  attributes: {
    address: string;
    name: string;
    symbol: string;
    image_url: string;
    coingecko_coin_id: string;
    websites: string[];
    description: string;
    discord_url?: string;
    telegram_handle?: string;
    twitter_handle?: string;
  };
};

export const getTokenInfoWithGeckoTerminal = async (
  chainName: string,
  tokenAddress: string
): Promise<{
  data: GeckoterminalTokenInfo;
}> => {
  const response = await fetch(
    `https://api.geckoterminal.com/api/v2/networks/${chainName}/tokens/${tokenAddress}/info`
  );

  const data = await response.json();
  if (!response.ok) {
    console.log("data", data);

    throw new Error(data?.errors?.[0]?.title || "Failed to fetch token info");
  }
  return data;
};
