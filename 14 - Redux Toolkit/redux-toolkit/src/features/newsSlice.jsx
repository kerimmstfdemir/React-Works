import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    newsList: [],
    loading: false,
    error: false
};

//? State'lerin API gibi async kaynaklardan gelen verilere gore guncellenmesi gerekebilir.
//? Ancak boyle bir durumda async islem tamamlandiktan sonra state guncellenmelidir.
//? Gonderilen api istegi ile dogrudan state guncellememelidir.
//? Islemin tamamlanmasi ile gelen veriye gore state'in guncellenemsini saglamak
//? adina bir arabirim kullanilmaktadir.
//? Bu arabirim middleware denilir.Redux-Toolkit, default olarak Thunk kullanmaktadir.
//! Thunk'ın amaci reducers'a islenmis sonuclari gondermeden once gecikmeli asenkron ismlerinin yurutulmesini saglamaktir.

export const getNews = createAsyncThunk(
    "getNews", //! action types

    async (thunkAPI, { rejectWithValue }) => {
        //! async callback function
        const API_KEY = process.env.REACT_APP_API_KEY;
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

        try {
            const { data } = await axios(url)
            return data.articles;
        } catch(error) {
            console.log(error);
            return rejectWithValue("Something went wrong")
        }
})

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        clearNewList: (state) => {
            state.newsList = []
        }
    },
    extraReducers: (builder) => {
        //? pending, fulfilled, rejected
        builder.addCase(getNews.pending, (state) => {
            state.loading = true
        }).addCase(getNews.fulfilled, (state, { payload }) => {
            state.newsList = payload;
            state.loading = false;
        }).addCase(getNews.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        })
    }
});

export const { clearNewList } = newsSlice.actions

export default newsSlice.reducer