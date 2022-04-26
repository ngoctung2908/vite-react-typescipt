import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { App } from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { ToastContainer } from 'react-toastify'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)

const app = (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)

root.render(app)
