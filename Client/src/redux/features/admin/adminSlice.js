import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    status: 'idle',
    error: null,
    allUsers: null,
    userDetails: null,
    reservationBooking: '',
    adminAuth: {},
}

export const loginAdmin = createAsyncThunk(
    'admin/loginAdmin',
    async (userAdmin) => {
        try {
            const response = await axios.post('/admin/login', userAdmin)
            console.log('soy el loguin de admin', response.data)
            return response.data

        } catch (error) {
            console.log('soy el error en loginAdmin', error)
            throw error
        }
    }
)

export const getAllUserForAdmin = createAsyncThunk(
    'admin/getAllUserForAdmin',
    async (token) => {
        console.log('soy token en getAllUserForAdmin', token)
        try {
            const response = await axios.get('/admin/allusers', {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            });
            console.log('soy getAllUserForAdmin en feature admin', response.data)
            return response.data
        } catch (error) {
            console.log(error)
            throw error
        }
    }
);

export const userDetails = createAsyncThunk(
    'admin/userDetails',
    async ({sub, token}) => {

        console.log('soy userDetails ', sub , token)
        try {
            const response = await axios.get(`/admin/user/${sub}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('soy userDetails', response.data)
            return response.data
        } catch (error) {
            console.log(error)
            throw error
        }
    }
)

export const clearDetails = createAction('admin/clearDetails')

export const adminPostParkingSpaceReservation = createAsyncThunk(
    'admin/adminPostParkingSpaceReservation',
    async (data) => {
        try {
            console.log("desde admin, token:", data[1], " valores: ",data[0])
            const response = await axios.post(`/admin/reservation/create`, data[0], {
                headers: {
                    Authorization: `Bearer ${data[1]}`
                }
            });
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers:{
        clearDetails: (state) => {
            state.userDetails = null;
          },
    },
    extraReducers: (builder) => {
        builder

            .addCase(loginAdmin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.adminAuth = action.payload;
                state.error = null;
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })

            .addCase(getAllUserForAdmin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllUserForAdmin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allUsers = action.payload;
                state.error = null;
            })
            .addCase(getAllUserForAdmin.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })

            .addCase(userDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(userDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userDetails = action.payload;
                state.error = null;
            })
            .addCase(userDetails.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })

            .addCase(adminPostParkingSpaceReservation.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(adminPostParkingSpaceReservation.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.reservationBooking = action.payload
            })
            .addCase(adminPostParkingSpaceReservation.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message 
            })
    }
})

export default adminSlice.reducer;