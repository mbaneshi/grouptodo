export {};
// import { ITask,ITasks } from '../../interface/Tasks';
// import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { nanoid } from '@reduxjs/toolkit';

// const initialState = {
// 	tasks: JSON.parse(localStorage.getItem('tasks')!) as ITasks || [] as ITasks,
// };

// export const todoSlice = createSlice({
//   name: 'todo',
//   initialState,
//   // The `reducers` field lets us define reducers and generate associated actions
//   reducers: {

// addTask: (state, action: PayloadAction<string>) => {
//             const task:ITask = {
//                 id: nanoid(),
//                 title: action.payload,
//                 creation_date:Date(),
//                 state:'pending',
//             };
// 			state.tasks.push(task);
// 		},
// updateTask: (state, action: PayloadAction<ITask>) => {
//             state.tasks = state.tasks.map((task) =>
//             task.id === action.payload.id
//                 ? { ...action.payload, state:'pending'  }
//                 : task
//             );
// 		},
// deleteTask: (state, action: PayloadAction<ITask>) => {
// 			state.tasks = state.tasks.filter(
// 				(task) => task.id !== action.payload.id
//
// 		},
//   },
// );

// // export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// // export const selectCount = (state: RootState) => state.counter.value;

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

// export default todoSlice.reducer;
