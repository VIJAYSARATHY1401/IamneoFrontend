import "../bs/css/bootstrap.min.css";
import "../styles/App.css";
import Header from "../components/Header";
import Secheader from "../components/Secheader";
import Sidebar from "../components/Sidebar";
import Grid from "../components/Grid.jsx";
function App() {
	return (
		<div>
			<div style={{ display: "flex" }}>
				<div class="sides">
					<Sidebar />
				</div>
				<div class="remcontainer" style={{ width: "100%" }}>
					<Header />
					<Secheader />
					<Grid />
				</div>
			</div>
		</div>
	);
}

export default App;
