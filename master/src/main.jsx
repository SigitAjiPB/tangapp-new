import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import {Provider} from 'react-redux'
import store from './redux/store.js'
import DarkModeContextProvider from './context/DarkMode.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
      <BrowserRouter>
            <App />
      </BrowserRouter>

      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);