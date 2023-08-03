import { toast } from "react-hot-toast";

function App() {
	return (
		<div>
			<button onClick={() => toast("hello tost work successfully!")}>
				toast me
			</button>
		</div>
	);
}

export default App;
