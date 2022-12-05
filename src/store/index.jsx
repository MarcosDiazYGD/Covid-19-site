import { configureStore } from '@reduxjs/toolkit'
import langSlice from './slices/lang.slice'

export default configureStore({
    reducer: {
      lang: langSlice
    }
})
