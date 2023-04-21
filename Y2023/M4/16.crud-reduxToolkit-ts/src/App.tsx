import { useState } from "react";
import { Toaster } from "sonner";
import "./App.css";
import CreateNewUser from "./components/createNewUser";
import ListOfUsers from "./components/listOfUsers";
import { userWithId } from "./types/users";

function App() {
	const [isEditting, setIsEditting] = useState<userWithId | "">("");

	return (
		<div>
			<Toaster closeButton richColors />
			<ListOfUsers setIsEditting={setIsEditting} />
			<CreateNewUser isEditting={isEditting} setIsEditting={setIsEditting} />
		</div>
	);
}

export default App;
