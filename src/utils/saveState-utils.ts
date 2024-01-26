import { AppRootStateType } from "../store/store";

export const saveState = (state: AppRootStateType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('app-state', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};