import { configureStore } from '@reduxjs/toolkit'
import Auth from './Auth'
import Enquiry from './Enquiry'

const Store = configureStore({
  reducer: {
    auth: Auth,
    enquiry: Enquiry,
  },
})

export default Store