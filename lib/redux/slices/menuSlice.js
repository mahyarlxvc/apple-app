import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
    name: 'menu',
    initialState: [],
    reducers: {
        setMenu: (state, { payload }) => {
            state = payload
        },
    },
})

export const { setMenu } = menuSlice.actions

export default menuSlice.reducer