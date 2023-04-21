import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserActions";
import type { user, userWithId } from "../types/users";

interface props {
	isEditting: userWithId | "";
	setIsEditting: React.Dispatch<React.SetStateAction<"" | userWithId>>;
}

const CreateNewUser: React.FC<props> = ({ isEditting, setIsEditting }) => {
	const [notification, setNotification] = useState<"ok" | "ko" | undefined>(
		undefined,
	);
	const { addUser, updateUser } = useUserActions();

	const handleOnSumbit = (
		event: React.FormEvent<HTMLFormElement>,
		id?: string,
	) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);
		const newUser: user = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			github: formData.get("github") as string,
		};

		if (!newUser.name || !newUser.email || !newUser.github) {
			setNotification("ko");
			return;
		}

		if (isEditting) {
			updateUser({ ...newUser, id: isEditting as unknown as string });
			setIsEditting("");
		} else {
			addUser(newUser);
		}
		setNotification("ok");
		form.reset();
	};
	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>{isEditting ? "Edit" : "Add"} user</Title>
			<form
				onSubmit={handleOnSumbit}
				style={{ display: "flex", flexDirection: "column", gap: "15px" }}
			>
				<TextInput name="name" placeholder="Nombre" />
				<TextInput name="email" placeholder="Email" />
				<TextInput name="github" placeholder="github" />
				<div>
					<Button style={{ width: "20%" }} type="submit">
						{isEditting ? "Edit" : "Add"}
					</Button>
					{notification === "ok" && (
						<Badge color="green">User added correctly</Badge>
					)}
					{notification === "ko" && <Badge color="red">Error</Badge>}
				</div>
			</form>
		</Card>
	);
};

export default CreateNewUser;
