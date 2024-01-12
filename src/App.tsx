import logo from "./assets/logo.svg";
import "./App.css";
import {
  useLauncheQuery,
  useLaunchesForPayloadsQuery,
  usePayloadsNationalitiesQuery,
} from "./services/spaceXApi";

function App() {
  const { data } = usePayloadsNationalitiesQuery();
  const { data: launchData } = useLaunchesForPayloadsQuery({
    nationality: "United States",
  });
  const { data: oneLaunch } = useLauncheQuery({
    id: "5eb87cd9ffd86e000604b32a",
  });

  console.log(oneLaunch);

  console.log(launchData);

  const nationList = data?.docs;
  const uniqueNations = [
    ...new Set(nationList?.flatMap((nationality) => nationality.nationalities)),
  ];

  console.log(uniqueNations);

  return (
    <div className="app">
      <img src={logo} className="logo" alt="Vite logo" />
      <header className="header">
        <h2>Welcome to the Frontend Technical Test</h2>
        <p>Please check the README before you start.</p>
      </header>
    </div>
  );
}

export default App;
