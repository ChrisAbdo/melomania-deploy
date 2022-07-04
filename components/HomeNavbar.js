import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputLeftElement,
  Input,
  SearchIcon,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    console.log("Requesting account...");

    // Check if Meta Mask Extension exists
    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
        provider.on("network", (newNetwork, oldNetwork) => {
          // When a Provider makes its initial connection, it emits a "network"
          // event with a null oldNetwork along with the newNetwork. So, if the
          // oldNetwork exists, it represents a changing network
          if (oldNetwork) {
            window.location.reload();
          }
        });
      } catch (error) {
        console.log("Error connecting...");
      }
    } else {
      alert("Meta Mask not detected");
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  async function changeWallet() {
    const accounts = await window.ethereum
      .request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {},
          },
        ],
      })
      .then(() =>
        ethereum.request({
          method: "eth_requestAccounts",
        })
      );
    setWalletAddress(accounts[0]);
    const account = accounts[0];
  }

  return (
    <div className="flex w-full justify-between  border-b border-gray-500 ">
      <link
        href="https://fonts.googleapis.com/css2?family=Comforter&family=Poppins:wght@300&family=Supermercado+One&display=swap"
        rel="stylesheet"
      />
      <Link href="/">
        <h1 className={styles.navbarText}>melomania</h1>
      </Link>

      <form class="flex items-center"></form>

      <div className={styles.navbarHeader}>
        <Link href="/">
          <Button variant="ghost">home</Button>
        </Link>
        <Link href="/marketplace">
          <Button variant="ghost">marketplace</Button>
        </Link>
        <Link href="/profile">
          <Button variant="ghost">profile</Button>
        </Link>
      </div>
      <div className="flex items-center">
        &nbsp;&nbsp;
        <ThemeSwitcher />
        &nbsp;&nbsp;
        {walletAddress ? (
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme="purple"
              onClick={requestAccount}
            >
              {walletAddress.length > 0 &&
                walletAddress.substring(0, 5) +
                  "..." +
                  walletAddress.substring(walletAddress.length - 4)}
              {walletAddress.length === 0 && "Connect Wallet"}
            </MenuButton>
            <MenuList>
              <MenuItem>View Profile</MenuItem>
              <MenuItem onClick={changeWallet}>Change Wallet</MenuItem>
              <MenuItem>Disconnect</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <ConnectButton className="connectButton" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
