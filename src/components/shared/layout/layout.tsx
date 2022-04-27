import { Outlet } from 'react-router-dom'
import { useDisclosure } from "@chakra-ui/react";
import Header from './header'
import SelectWalletModal from '../modal/walletConnect/walletConnect'

export const Layout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div className="bg-app-backgound">
          <Header />
          <div className="p-3">
            <Outlet />
          </div>
          <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
        </div>
    )
      
}