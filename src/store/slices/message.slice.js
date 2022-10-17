// import { createSlice } from '@reduxjs/toolkit';
// import {actionGetMessage} from "../actions";
//
// const messageListSlice = createSlice({
//     name: 'messageList',
//     initialState: {
//         movieList: [],
//     },
//     reducers: {},
//     extraReducers: {
//         [actionGetMessage.pending]: (store: {}) => {
//             // eslint-disable-next-line no-param-reassign
//             store.isLoading = true;
//         },
//         [actionGetMessage.fulfilled]: (store, { payload }) => {
//             // eslint-disable-next-line no-param-reassign
//             store.movieList = payload.map((itemMovie) => (
//                 { ...itemMovie, ratingForFilter: 0, likeForFilter: 0 }
//             ));
//             // eslint-disable-next-line no-param-reassign
//             store.movieListForRenderView = store.movieList;
//             // eslint-disable-next-line no-param-reassign
//             store.isLoading = false;
//         },
//         [actionGetMessage.rejected]: (store, { payload }) => {
//             // eslint-disable-next-line no-param-reassign
//             store.error = payload;
//             // eslint-disable-next-line no-param-reassign
//             store.isLoading = false;
//         },
//     },
// });
//
// export const {} = messageListSlice.actions;
// export default messageListSlice.reducer;