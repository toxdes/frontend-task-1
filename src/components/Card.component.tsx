import { TTrendingAsset } from "../types";
import cardBackground from "../assets/card-bg.svg";
interface CardProps {
  card: TTrendingAsset;
}

const formatAmount = (
  locale: string,
  currency: string,
  amount: number,
  minimumFractionDigits: number,
  maximumFractionDigits: number
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(amount);
};

export default function Card({ card }: CardProps) {
  return (
    <div className="flex flex-col w-72 m-4 my-8">
      <div
        className={`border-box w-fit p-5 bg-gradient-to-b from-gray to-${card.shortName.toLowerCase()} 
 mx-auto border-2 rounded-full border-gray2 h-full`}
      >
        <img
          src={card.logo}
          className="w-12 h-12"
          draggable={false}
          alt="logo"
        ></img>
      </div>
      <img
        src={cardBackground}
        className="w-full h-auto -mt-12"
        draggable={false}
        alt="card-bg"
      ></img>
      <div className="flex flex-col  -mt-72 px-8">
        <p className="text-center font-tomorrow text-white2 text-xs mt-2">
          {card.name} ({card.shortName})
        </p>
        <div className="relative flex flex-row items-center justify-start bg-black mt-4 p-1 rounded-lg">
          <p className="flex-grow w-full font-tomorrow text-white text-center mx-auto">
            {formatAmount(card.locale, card.currency, card.price, 2, 12)}
          </p>
          <p
            className={
              "absolute font-tomorrow  right-1 text-center text-xs" +
              ` ${card.delta >= 0 ? "text-green-600" : "text-red-600"}`
            }
          >
            {card.delta}%
          </p>
        </div>
        <p className="text-center font-tomorrow text-white2 text-xs mt-2">
          Price
        </p>
        <div className="relative flex flex-row items-center justify-start bg-black mt-4 p-1 rounded-lg">
          <p className="flex-grow w-full font-tomorrow text-white text-center mx-auto">
            {formatAmount(card.locale, card.currency, card.tvl, 0, 12)}
          </p>
        </div>

        <p className="text-center font-tomorrow text-white2 text-xs mt-2">
          TVL
        </p>
        <div className="flex flex-row bg-black items-center justify-evenly py-2 mt-6 mx-auto rounded-full">
          {card.popularPairs.map((pair) => {
            return (
              <img
                src={pair}
                className="w-6 h-6 mx-2"
                alt="logo"
                key={pair}
                draggable={false}
              />
            );
          })}
        </div>
        <p className="text-center font-tomorrow text-white2 text-xs mt-2">
          Popular Pairs
        </p>
      </div>
    </div>
  );
}
