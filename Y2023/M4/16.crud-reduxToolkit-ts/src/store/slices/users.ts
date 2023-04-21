import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { user, userId, userWithId } from "../../types/users";

const defaultState: userWithId[] = [
	{
		id: "1",
		name: "John",
		email: "john@example.com",
		github: "github.com/john",
	},
	{
		id: "2",
		name: "Jane",
		email: "jane@example.com",
		github: "github.com/jane",
	},
	{ id: "3", name: "Bob", email: "bob@example.com", github: "github.com/bob" },
	{
		id: "4",
		name: "Alice",
		email: "alice@example.com",
		github: "github.com/alice",
	},
	{ id: "5", name: "Sam", email: "sam@example.com", github: "github.com/sam" },
	{
		id: "6",
		name: "Karen",
		email: "karen@example.com",
		github: "github.com/karen",
	},
];

const initialState: userWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");

	if (persistedState) {
		return JSON.parse(persistedState).users;
	}

	return defaultState;
})();

const userSlice = createSlice({
	name: "users",
	initialState: initialState,
	reducers: {
		addUser: (state, action: PayloadAction<user>) => {
			const id = crypto.randomUUID();
			const newUser: userWithId = { ...action.payload, id };
			state.push(newUser);
		},
		deleteUser: (state, action: PayloadAction<userId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		updateUser: (state, action: PayloadAction<userWithId>) => {
			const userIndex = state.findIndex(
				(user) => user.id === action.payload.id,
			);
			state[userIndex] = action.payload;
		},
		rollBackUser: (state, action: PayloadAction<userWithId>) => {
			const user = action.payload;
			const isUserInList = state.some((user) => user.id === user.id);

			if (!isUserInList) {
				state.push(user);
			}
		},
	},
});

const userReducer = userSlice.reducer;

export const { deleteUser, addUser, updateUser } = userSlice.actions;
export { userSlice, userReducer };
