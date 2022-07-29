import ACTIVITY_IMAGE from "../assets/activity.svg";
import { TTrendingAsset } from "../types";
import Card from "./Card.component";

// Header Component
export const Header = function () {
  return (
    <div className="flex flex-row items-center justify-start w-full my-4">
      <img src={ACTIVITY_IMAGE} className="w-4 h-4" alt="activity-logo" />
      <p className="text-white font-tomorrow text-base mx-2 opacity-90">
        Trending Assets
      </p>
    </div>
  );
};

// List of cards
interface AssetCardsProps {
  cards: TTrendingAsset[];
}

export const AssetCards = function ({ cards }: AssetCardsProps) {
  if (!cards || cards.length === 0) {
    return (
      <div className="w-full mt-4">
        <p className="font-tomorrow text-white opacity-90 text-center">
          Nothing to show at the moment.{" "}
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-row align-start justify-center flex-wrap w-full">
      {cards.map((card: TTrendingAsset) => (
        <Card card={card} key={card.shortName} />
      ))}
    </div>
  );
};
