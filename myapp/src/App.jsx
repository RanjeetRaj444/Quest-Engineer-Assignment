import { useEffect, useState } from "react";
import "./App.css";
import "./styles/input.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getData } from "./data";
import home_image from "./assets/hone-img.webp";

const App = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [data, setData] = useState({});
	const notify = () => {
		// Calling toast method by passing string
		toast.success("Successful", {
			position: "top-center",
		});
	};
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
	useEffect(() => {
		// getData(toast, setData);
	}, []);
	return (
		<div className="App">
			<div className="homepage">
				<div className="navbar">
					<div>
						<div className="links">
							<h3>How it Works</h3>
							<h3>Product</h3>
							<h3>Solutions</h3>
							<h3>Coustomer</h3>
							<h3>Success</h3>
							<h3>Partners</h3>
							<h3>Resources</h3>
							<h3>Company</h3>
						</div>
						<div className="buttons">
							<Buttons click={notify} text="Login" />
							<Buttons text="getStartd" />
						</div>
					</div>
				</div>
				<div className="Home">
					<div>
						<h1 className="home-header">
							There’s never been a better time to be a better marketer.™
						</h1>
						<p className="home-para">
							Data is flowing and channels are growing. Customers are demanding
							the world, while AI is already transforming it. Manage it all with
							the right customer engagement platform.
						</p>
						<Buttons text="Get Started" />
					</div>
					<div className="home-img-container">
						<img src={home_image} alt="" />
					</div>
				</div>
			</div>
			<Buttons
				class="open-drawer-button fixed-button"
				click={toggleDrawer}
				text="Connect with sales"
			/>
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
			<ToastContainer />
		</div>
	);
};

export default App;
