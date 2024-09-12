import SearchComponent from "./components/SearchComponent";
import TopBarComponent from "./components/TopBarComponent";
import WeatherComponent from "./components/WeatherComponent";

function App() {
  return (
    <div className="App">
      <TopBarComponent />
      <SearchComponent />
      <WeatherComponent />
    </div>
  );
}

export default App;
