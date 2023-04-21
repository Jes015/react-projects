import {
	addUser as addUserN,
	deleteUser,
	updateUser as updateUserN,
} from "../store/slices/users";
import { user, userWithId } from "../types/users";
import { useAppDispatch } from "./useStore";

const useUserActions = () => {
	const dispatch = useAppDispatch();

	const removeUser = (id: string) => {
		dispatch(deleteUser(id));
	};

	const addUser = (user: user) => {
		dispatch(addUserN(user));
	};

	const updateUser = (user: userWithId) => {
		dispatch(updateUserN(user));
	};

	return { removeUser, addUser, updateUser };
};

export { useUserActions };
