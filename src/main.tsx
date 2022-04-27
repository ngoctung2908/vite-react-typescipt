import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { App } from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { ToastContainer } from 'react-toastify'
import { Web3ReactProvider } from '@web3-react/core'
import { ChakraProvider } from '@chakra-ui/react'
import { getLibrary } from 'utils/web3React'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)

const app = (
  <StrictMode>
      <ChakraProvider>
        <Web3ReactProvider getLibrary={getLibrary}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                    <ToastContainer />
                </BrowserRouter>
            </Provider>
        </Web3ReactProvider>
      </ChakraProvider>
  </StrictMode>
)

root.render(app)
