import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Melomania from "../build/contracts/Melomania.json";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //   // loadBLockchainData();
  //   const [blockchainData, setBlockchainData] = useState([]);

  //   const loadBlockchainData = async () => {
  //     const web3 = window.web3;
  //     const accounts = await web3.eth.getAccounts();
  //     const account = accounts[0];
  //     const networkId = await web3.eth.net.getId();
  //     const networkData = Melomania.networks[networkId];
  //     const melomania = new web3.eth.Contract(Melomania.abi, networkData.address);
  //     const imagesCount = await melomania.methods.imageCount().call();
  //     for (var i = 1; i <= imagesCount; i++) {
  //       const image = await melomania.methods.images(i).call();
  //       setBlockchainData([...blockchainData, image]);
  //     }
  //   };

  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} size="xs">
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Hello</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
