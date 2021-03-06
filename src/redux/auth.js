import { createSlice  ,} from '@reduxjs/toolkit';



const authSlice = createSlice({
    name: "auth",
    initialState: {
        superuser: true,
        student: false,
        teacher: false,
        accountant: false,
        reception: false
    },
    reducers: {
        profileoutside(state) {
            state.accountant = false;
            state.reception = false;
            state.student = false;
            state.teacher = false;
            state.superuser = false;
        },
        superuser(state, { payload }) {
            state.superuser = payload
        },
        student(state, { payload }) {
            state.student = payload
        },
        teacher(state, { payload }) {
            state.teacher = payload
        },
        accountant(state, { payload }) {
            state.accountant = payload
        },
        reception(state, { payload }) {
            state.reception = payload
        }
    }

})


export const {profileoutside , superuser , student ,  teacher , accountant , reception} = authSlice.actions

export default authSlice.reducer;