import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  enquiries: []
}

const Enquiry = createSlice({
  name: 'enquiry',
  initialState,
  reducers: {
    addEnquiry: (state, action) => {
      state.enquiries.push(action.payload)
    },
    clearEnquiries: (state) => {
      state.enquiries = []
    }
  }
})

export const { addEnquiry, clearEnquiries } = Enquiry.actions
export default Enquiry.reducer 