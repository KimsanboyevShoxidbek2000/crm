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
        superuser: (state , {payload}) => {
            state.superuser = payload
        },
        reception: (state , {payload}) => {
            state.reception = payload
        },
        teacher: (state , {payload}) => {
            state.teacher = payload
        },
        accountant: (state , {payload}) => {
            state.accountant = payload
        },
        student: (state , {payload}) => {
            state.student = payload
        }
    }
})

export const {superuser , reception , teacher , accountant , student} = LoginSlice.actions;



export default LoginSlice.reducer;