import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
    name: 'goal',
    initialState: {
        overall: 10,
        completed: 0
    },
    reducers: {
        increaseGoal: (state, action) => {
            state.overall += action.payload;
        },
        decreaseGoal: (state, action) => {
            state.overall -= action.payload;
        },
        setGoal: (state, action) => {
            state.overall = action.payload;
        },

        increaseCompleted: (state, action) => {
            state.completed += action.payload;
        },
        decreaseCompleted: (state, action) => {
            state.completed -= action.payload;
        },
        setCompleted: (state, action) => {
            state.completed = action.payload;
        }
    }
});

export const {
    increaseGoal, decreaseGoal, setGoal,
    increaseCompleted, decreaseCompleted, setCompleted
} = goalSlice.actions;
export default goalSlice.reducer;