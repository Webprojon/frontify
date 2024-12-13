import { create } from "zustand";

type GlobalState = {
	feedback: boolean;
	setToggleFeedback: () => void;
};

export const useGlobalStates = create<GlobalState>((set) => ({
	feedback: false,
	setToggleFeedback: () => set((state) => ({ feedback: !state.feedback })),
}));
