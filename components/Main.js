import React, { Component } from "react";
import Identicon from "identicon.js";
import styles from "../styles/Main.module.css";
import { Button, Link } from "@chakra-ui/react";
import Sidenav from "./Sidenav";
import DrawerExample from "./Sidenav";

class Main extends Component {
  render() {
    return (
      // div that only allows 3 posts per row.
      <div className={styles.uploadFont}>
        <script src="../path/to/flowbite/dist/flowbite.js"></script>
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.0.0/dist/flowbite.min.css"
        />
        <script src="https://unpkg.com/flowbite@1.0.0/dist/flowbite.js"></script>

        <h1 className="ml-2">Assorted: Highest Tipped</h1>
        <div className="flex flex-wrap justify-center">
          {this.props.images.map((image, key) => {
            return (
              <div
                key={key}
                className="block overflow-hidden rounded-2xl mr-2 mb-2 border border-gray-500 "
              >
                <img
                  class="object-cover w-full h-56 "
                  src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                  alt=""
                  // make image fit the container
                  style={{
                    maxWidth: "290px",
                  }}
                />

                <div class="">
                  <Link
                    href={`https://www.etherscan.io/address/${image.author}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs"
                  >
                    {image.author}
                  </Link>
                  <ul id="imageList" className="">
                    <li className="">
                      <p class=""></p>
                      <p
                        className={styles.font}
                        class="border-b border-gray-500 mb-2 max-w-xs ml-1"
                      >
                        {image.description.length > 33
                          ? image.description.substring(0, 33) + "..."
                          : image.description}
                      </p>
                    </li>
                    <li
                      key={key}
                      className="space-x-9  border-b border-gray-500 mb-2 max-w-xs ml-1"
                    >
                      <small className="ml-1">
                        TIPS:{" "}
                        {window.web3.utils.fromWei(
                          image.tipAmount.toString(),
                          "Ether"
                        )}{" "}
                        ETH
                      </small>
                      <Button
                        size="xs"
                        name={image.id}
                        onClick={(event) => {
                          let value = prompt(
                            "How much ETH would you like to tip?"
                          );
                          let tipAmount = window.web3.utils.toWei(
                            value,
                            "Ether"
                          );
                          console.log(event.target.name, tipAmount);
                          this.props.tipImageOwner(
                            event.target.name,
                            tipAmount
                          );
                        }}
                      >
                        TIP ETH
                      </Button>
                      <Button
                        type="button"
                        size="xs"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        More Info
                      </Button>
                      <br />
                    </li>
                    <li
                      key={key}
                      className="space-x-14  mb-2 max-w-xs ml-1 mt-2"
                    >
                      <small className="ml-1">
                        LIKES:{" "}
                        {/* {window.web3.utils.fromWei(
                            image.likeCount.toString(),
                            "Ether"
                          )}{" "} */}
                        {/* window.web3.util.fromWei image.likeCount.toString but multiply the value by 100 */}
                        {window.web3.utils.fromWei(
                          image.likeCount.toString(),
                          "Ether"
                        ) * 100}{" "}
                      </small>

                      <Button
                        size="xs"
                        name={image.id}
                        onClick={(event) => {
                          let likeCount = window.web3.utils.toWei(
                            "0.01",
                            "Ether"
                          );
                          console.log(event.target.name, likeCount);
                          this.props.likeImage(event.target.name, likeCount);
                        }}
                      >
                        Like❤️
                      </Button>

                      <DrawerExample />
                      <br />
                    </li>
                    <>
                      {/* <div
                        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto  border-gray-500"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog relative w-auto pointer-events-none">
                          <div class=" border-b border-gray-500 modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-auto  rounded-md  text-current">
                            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4  rounded-t-md">
                              <h5
                                class="text-xl font-medium leading-normal text-gray-800 "
                                id="exampleModalLabel"
                              ></h5>
                              <button
                                type="button"
                                class="btn-close box-content w-4 h-4 p-1  border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <Link
                              class="modal-body relative p-4 text-gray-500 border-b border-t border-gray-500"
                              id="uploaderInfo"
                              href={`https://www.etherscan.io/address/${image.author}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            ></Link>
                            <Link
                              class="modal-body relative p-4 text-gray-500 border-b border-gray-500"
                              id="ipfsInfo"
                              target="_blank"
                              rel="noopener noreferrer"
                            ></Link>
                            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-500 rounded-b-md">
                              <Button
                                colorScheme="blue"
                                type="button"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Main;
