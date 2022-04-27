import {
    VStack,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Text
  } from "@chakra-ui/react";
  import { Image } from "@chakra-ui/react";
  import { useWeb3React } from "@web3-react/core";
  import { connectors } from "utils/web3React";

  import metamaskSvg from 'assets/img/metamask.svg'
  import bscSvg from 'assets/img/bsc.svg'
  import walletConnectSvg from 'assets/img/wallet-connect.svg'
  
  const SelectWalletModal = ({ isOpen, closeModal }) => {
    const { activate } = useWeb3React();
  
    const setProvider = (type) => {
      window.localStorage.setItem("provider", type);
    };
  
    return (
        <Modal isOpen={isOpen} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent w="300px">
          <ModalHeader>Select Wallet</ModalHeader>
          <ModalCloseButton
            _focus={{
              boxShadow: "none"
            }}
          />
          <ModalBody paddingBottom="1.5rem">
            <VStack>
              <Button
                variant="outline"
                onClick={() => {
                  activate(connectors.bscWallet);
                  setProvider("coinbaseWallet");
                  closeModal();
                }}
                w="100%"
              >
                <HStack w="100%" justifyContent="center">
                  <Image
                    src={bscSvg}
                    alt="Coinbase Wallet Logo"
                    width={25}
                    height={25}
                    borderRadius="3px"
                  />
                  <Text>BSC Wallet</Text>
                </HStack>
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  activate(connectors.walletConnect);
                  setProvider("walletConnect");
                  closeModal();
                }}
                w="100%"
              >
                <HStack w="100%" justifyContent="center">
                  <Image
                    src={walletConnectSvg}
                    alt="Wallet Connect Logo"
                    width={26}
                    height={26}
                    borderRadius="3px"
                  />
                  <Text>Wallet Connect</Text>
                </HStack>
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  activate(connectors.injected);
                  setProvider("injected");
                  closeModal();
                }}
                w="100%"
              >
                <HStack w="100%" justifyContent="center">
                  <Image
                    src={metamaskSvg}
                    alt="Metamask Logo"
                    width={25}
                    height={25}
                    borderRadius="3px"
                  />
                  <Text>Metamask</Text>
                </HStack>
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }

  export default SelectWalletModal
  