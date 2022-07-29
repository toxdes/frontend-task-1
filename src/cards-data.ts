import { TTrendingAsset } from "./types";
// const BTC_LOGO = "btc.svg";
// const SOL_LOGO = "sol.svg";
// const ETH_LOGO = "eth.svg";
// const BUSD_LOGO = "busd.svg";
// const SHIB_LOGO = "solana.svg";

import BTC_LOGO from "./assets/btc.svg";
import SOL_LOGO from "./assets/sol.svg";
import ETH_LOGO from "./assets/eth.svg";
import BUSD_LOGO from "./assets/busd.svg";
import SHIB_LOGO from "./assets/shib.svg";

const data: TTrendingAsset[] = [
  {
    name: "Bitcoin",
    shortName: "BTC",
    logo: BTC_LOGO,
    price: 31812.8,
    delta: -10,
    locale: "en-US",
    tvl: 60000,
    currency: "USD",
    popularPairs: [SOL_LOGO, ETH_LOGO, BUSD_LOGO],
  },
  {
    name: "Solana",
    shortName: "SOL",
    logo: SOL_LOGO,
    price: 32.83,
    delta: -12.32,
    locale: "en-US",
    tvl: 60000,
    currency: "USD",
    popularPairs: [BTC_LOGO, ETH_LOGO, BUSD_LOGO],
  },
  {
    name: "Ethereum",
    shortName: "ETH",
    logo: ETH_LOGO,
    price: 1466,
    delta: -11.93,
    locale: "en-US",
    tvl: 60000,
    currency: "USD",
    popularPairs: [SOL_LOGO, BTC_LOGO, BUSD_LOGO],
  },
  {
    name: "Binance USD",
    shortName: "BUSD",
    logo: BUSD_LOGO,
    price: 1,
    delta: 0.26,
    locale: "en-US",
    tvl: 60000,
    currency: "USD",
    popularPairs: [SOL_LOGO, ETH_LOGO, BUSD_LOGO],
  },
  {
    name: "Shiba Inu",
    shortName: "SHIB",
    logo: SHIB_LOGO,
    price: 0.00000001948,
    delta: -8.1,
    locale: "en-US",
    tvl: 60000,
    currency: "USD",
    popularPairs: [SOL_LOGO, ETH_LOGO, BUSD_LOGO],
  },
];

export default data;
