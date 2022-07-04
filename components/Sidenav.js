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
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import React, { useState } from "react";
import Melomania from "../build/contracts/Melomania.json";
import styles from "../styles/Sidenav.module.css";

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
      <Button
        className="border border-gray-500 mr-2"
        ref={btnRef}
        onClick={onOpen}
      >
        HELP
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className={styles.mainText}>
          <DrawerCloseButton />
          <DrawerHeader fontSize="3xl" className="border-b border-gray-500">
            How to use the Marketplace
          </DrawerHeader>

          <DrawerBody>
            <Text fontSize="2xl">1. Make sure you have the following:</Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Metamask installed and connected to the correct network
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Sufficient funds in your wallet to cover gas fees
              </ListItem>
              <Text fontSize="2xl">2. Upload your song:</Text>
              <UnorderedList>
                <ListItem>Select a .mp3, .mp4, or .wav file</ListItem>
                <ListItem>Give your song a title!</ListItem>
                <ListItem>
                  Click upload and confirm Metamask transaction
                </ListItem>
                <ListItem>
                  The page will be refreshed and you will see your post :)
                </ListItem>
              </UnorderedList>
              <Text fontSize="2xl">3. Tipping Songs</Text>
              <UnorderedList>
                <ListItem>
                  Click the TIP button on any post you would like to tip
                </ListItem>
                <ListItem>
                  You will be prompted to enter any amount of ETH/MATIC you
                  would like to donate. The lowest acceptable value is 0.01
                </ListItem>
                <ListItem>
                  Confirm the Metamask confirmation and the page will be
                  reloaded updating the tip count
                </ListItem>
              </UnorderedList>
              <Text fontSize="2xl">4. Liking Songs❤️</Text>
              <UnorderedList>
                <ListItem>
                  Click the Like❤️ button on any post you want to Like
                </ListItem>
                <ListItem>
                  Confirm the Metamask transaction of 0.01 ETH/MATIC to like
                  posts. This also goes directly to the uploader!
                </ListItem>
                <ListItem>The page will be reloaded and updated</ListItem>
              </UnorderedList>
              <Text fontSize="2xl">5. Profile Dashboard</Text>
              <UnorderedList>
                <ListItem>
                  View the Profile tab to see the number of likes and tips your
                  posts have
                </ListItem>
                <ListItem>
                  This dashboard is instantly updated every time you receive a
                  like or tip
                </ListItem>
                <ListItem>
                  This dashboard also displays more information about your posts
                  such as the time uploaded, the IPFS hash information, and
                  more!
                </ListItem>
              </UnorderedList>

              {/* You can also use custom icons from react-icons */}
            </List>
          </DrawerBody>

          <DrawerFooter>
            <Button size="sm" variant="outline" mr={3} onClick={onClose}>
              Exit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
