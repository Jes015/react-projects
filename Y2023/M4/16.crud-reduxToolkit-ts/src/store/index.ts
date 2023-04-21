import { configureStore } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { userReducer } from "./slices/users";

const middleWareLocalStorage = (state) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(state.getState()));
	toast.success("Operation completed");
};

const store = configureStore({
	reducer: {
		users: userReducer,
	},
	middleware: [middleWareLocalStorage],
});

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };
