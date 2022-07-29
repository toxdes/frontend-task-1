import "./App.css";
import { Header, AssetCards } from "./components/index";
import TRENDING_CARDS_FAKE_DATA from "./cards-data";

function App() {
  return (
    <div className="flex flex-col items-start justify-center end w-full min-h-screen bg-black px-20 pb-20 min-w-120">
      <Header />
      <AssetCards cards={TRENDING_CARDS_FAKE_DATA} />
    </div>
  );
}

export default App;
