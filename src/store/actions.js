// import { createAsyncThunk } from '@reduxjs/toolkit';
//
// export const actionGetMessage = createAsyncThunk(
//     'movieList/actionGetMovieList',
//     async (args, thunkAPI) => {
//         const [fetchMessages] = args;
//         try {
//             const response = await fetchMovieList();
//             return response.data.results;
//         } catch (error) {
//             return thunkAPI.rejectWithValue({
//                 message: 'Cannot get movie list :(',
//             });
//         }
//     },
// );