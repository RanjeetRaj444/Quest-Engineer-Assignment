import { useState } from "react";
import "./App.css";
import "./styles/input.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";

const App = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};
	let fields = [
		{
			placeholder: "Name",
		},
		{
			placeholder: "First Name",
		},
		{
			placeholder: "Last Name",
		},
		{
			placeholder: "Email Address",
		},
		{
			placeholder: "Company",
		},
		{
			placeholder: "Phone Number",
		},
		{
			placeholder: "Job Title",
		},
	];
	return (
		<div className="App">
			<div className="homepage">
				<div className="navbar">
					<div className="links">
						<h3>Home</h3>
						<h3>Product</h3>
						<h3>Contact</h3>
					</div>
					<div className="buttons">
						<Buttons text="Login" />
						<Buttons text="SignUp" />
					</div>
				</div>
				<div className="Home"></div>
			</div>
			<Buttons class="open-drawer-button" click={toggleDrawer} text="Open" />
			<div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
				<div>
					<Buttons
						click={toggleDrawer}
						class="close-drawer-button"
						text="Back"
					/>
				</div>
				<div className="drawer-content">
					<form className="form" action="">
						{fields.map((ele, ind) => (
							<Input key={ind} text={ele.placeholder} />
						))}
						<Buttons text="Submit" type="submit" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default App;
