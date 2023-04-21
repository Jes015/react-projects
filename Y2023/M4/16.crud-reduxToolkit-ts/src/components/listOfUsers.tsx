import {
	Badge,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";
import { useAppSelector } from "../hooks/useStore";
import { useUserActions } from "../hooks/useUserActions";
import { userWithId } from "../types/users";
import { DeleteIcon, EditIcon } from "./Icons";

interface props {
	setIsEditting: React.Dispatch<React.SetStateAction<"" | userWithId>>;
}

const ListOfUsers: React.FC<props> = ({ setIsEditting }) => {
	const users = useAppSelector((state) => state.users);
	const { removeUser } = useUserActions();

	const handleDeleteClick = (id: string) => {
		removeUser(id);
	};

	const handleUpdateClick = (id: string) => {
		console.log(id);
		setIsEditting(id as unknown as userWithId);
	};

	return (
		<Card>
			<Title style={{ display: "flex", gap: "10px" }}>
				Usuarios
				<Badge>{users.length}</Badge>
			</Title>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell> Id </TableHeaderCell>
						<TableHeaderCell> Name </TableHeaderCell>
						<TableHeaderCell> Email </TableHeaderCell>
						<TableHeaderCell> Github </TableHeaderCell>
						<TableHeaderCell> Acciones </TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((item) => (
						<TableRow key={item.name}>
							<TableCell>{item.id}</TableCell>
							<TableCell
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									gap: "25px",
								}}
							>
								<img
									style={{ width: "45px", borderRadius: "100%" }}
									src={`https://unavatar.io/github/${item.name}`}
									alt={`${item.name}'s avatar`}
								/>
								{item.name}
							</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>{item.github}</TableCell>
							<TableCell style={{ display: "flex", gap: "15px" }}>
								<button
									onClick={() => {
										handleUpdateClick(item.id);
									}}
									type="button"
								>
									<EditIcon />
								</button>
								<button
									type="button"
									onClick={() => {
										handleDeleteClick(item.id);
									}}
								>
									<DeleteIcon />
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
};

export default ListOfUsers;
