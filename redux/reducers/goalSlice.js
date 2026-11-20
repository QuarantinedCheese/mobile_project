import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
    name: 'goal',
    initialState: {
        overall: 10,
        completed: 0,
        goals: [
            {
                id: 0,
                name: 'Banana',
                due: '',
                desc: 'eat a beautiful banana',
            },
            {
                id: 1,
                name: 'Workout',
                due: '',
                desc: 'Workout and get swole',
            },
            {
                id: 2,
                name: 'Finish Mobile PM1',
                due: 'Nov 21st',
                desc: '',
            },
        ]
    },
    reducers: {
        increaseGoal: (state, action) => {
            state.overall += action.payload;
        },
        decreaseGoal: (state, action) => {
            if (state.overall > 1) {
                state.overall -= action.payload;
            }
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
        },

        appendGoal: (state, action) => {
            state.goals.push(action.payload);
        },
        removeGoal: (state, action) => {
            state.goals.splice(
                state.goals.findIndex(v => v.id === action.payload.id), 1
            );
        }
    }
});

export const {
    increaseGoal, decreaseGoal, setGoal,
    increaseCompleted, decreaseCompleted, setCompleted,
    appendGoal, removeGoal
} = goalSlice.actions;
export default goalSlice.reducer;