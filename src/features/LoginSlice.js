import { createSlice } from '@reduxjs/toolkit';


const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        superuser: false,
        reception: false,
        student: false,
        teacher: false,
        accountant: false
    },
    reducers: {
        superuser: (state) => {
            state.superuser = true
        },
        reception: (state) => {
            state.reception = true
        },
        teacher: (state) => {
            state.teacher = true
        },
        accountant: (state) => {
            state.accountant = true
        },
        student: (state) => {
            state.student = true
        }
    }
})

export const {superuser , reception , teacher , accountant , student} = LoginSlice.actions;

export const selectorLogin = state => state.login;

export default LoginSlice.reducer;