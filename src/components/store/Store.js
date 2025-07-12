import { configureStore } from '@reduxjs/toolkit'
import Auth from './Auth'

const Store = configureStore({
  reducer: {
    auth: Auth,
  },
})

export default Store