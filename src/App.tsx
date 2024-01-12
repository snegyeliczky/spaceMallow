import logo from "./assets/logo.svg";
import "./App.css";

function App() {
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
