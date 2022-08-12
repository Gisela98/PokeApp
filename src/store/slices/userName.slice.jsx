import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
    name: 'UserName',
    initialState: "",
    reducers: {
        input: function(state,actions){
            return actions.payload
        }

    }
})

export const {input} = userNameSlice.actions;

export default userNameSlice.reducer;