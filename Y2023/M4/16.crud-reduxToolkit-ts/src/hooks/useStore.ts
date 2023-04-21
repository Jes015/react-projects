import {
	useDispatch,
	useSelector,
	type TypedUseSelectorHook,
} from "react-redux";
import type { AppDispatch, RootState } from "../store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch: () => AppDispatch = useDispatch;

export { useAppSelector, useAppDispatch };
