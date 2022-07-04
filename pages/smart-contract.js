import React from "react";
import Navbar from "../components/HomeNavbar";
import {
  Text,
  Code,
  CodeLine,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Heading,
} from "@chakra-ui/react";
import styles from "../styles/smart-contract.module.css";
import { CopyBlock, a11yDark } from "react-code-blocks";
import { SiSolidity } from "react-icons/si";
import { FaMap } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { BsCalendarEventFill } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";
import { AiOutlineFunction } from "react-icons/ai";
import { HiCode } from "react-icons/hi";

function code() {
  return (
    <div className={styles.headerFont}>
      <Navbar />
      {/* <div className="flex flex-col items-center justify-center h-screen"> */}
      {/* place sidebar on the left side of the screen */}
      <div className="flex">
        <div class=" flex flex-col justify-between h-screen  border-r">
          <div class="fixed h-screen px-4 py-6">
            <Text fontSize="2xl" fontWeight="extrabold">
              Contents
            </Text>

            <nav class="flex flex-col mt-6 space-y-1">
              <a
                href="#introduction"
                class="flex items-center px-4 py-2 hover:bg-gray-200  rounded-lg"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg> */}
                <SiSolidity />

                <span class="ml-3 text-sm font-medium"> introduction </span>
              </a>
              <a href="#contract-mapping">
                <summary class="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-700">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg> */}
                  <FaMap />

                  <span class="ml-3 text-sm font-medium"> mapping </span>
                </summary>
              </a>

              <nav class="mt-1.5 ml-8 flex flex-col"></nav>

              <a
                href="#song-structs"
                class="flex items-center px-4 py-2  rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg> */}
                <MdConstruction />

                <span class="ml-3 text-sm font-medium">song structs </span>
              </a>

              <a
                href="#events"
                class="flex items-center px-4 py-2  rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg> */}
                <BsCalendarEventFill />

                <span class="ml-3 text-sm font-medium"> events </span>
              </a>
              <a href="#constructor">
                <summary class="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg> */}
                  <BiCodeCurly />

                  <span class="ml-3 text-sm font-medium"> constructor </span>
                </summary>
              </a>
              <a href="#functions">
                <summary class="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg> */}
                  <AiOutlineFunction />

                  <span class="ml-3 text-sm font-medium"> functions </span>
                </summary>
              </a>
              <a href="#final-code">
                <summary class="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg> */}
                  <HiCode />

                  <span class="ml-3 text-sm font-medium"> final code </span>
                </summary>
              </a>
            </nav>
          </div>

          <div class="text-transparent  inset-x-0 bottom-0 border-t border-gray-100">
            <a href="" class="flex items-center p-4  hover:bg-gray-50 shrink-0">
              <div class="ml-1.5">
                <p class="text-xs">
                  <span> ~~~~~~~~~~~~~~~~~~~~~~~~~~~ </span>
                </p>
              </div>
            </a>
          </div>
        </div>
        {/* CODE SNIPPETS ARE HERE */}
        <div class="flex-1 flex flex-col">
          {/* do not allow Code shadow to extend past last character */}
          <div class="flex-1 overflow-y-auto">
            <Text className="ml-2 border-b border-gray-500" fontSize="4xl">
              melomania.sol
            </Text>
            <OrderedList>
              <Heading
                className="ml-1 mb-1"
                as="h2"
                size="xl"
                id="introduction"
              >
                introduction
              </Heading>
              <ListItem className="ml-4">
                <Text className="mt-1 " fontSize="2xl">
                  the contract begins by specifying the license identifier and
                  the version of solidity that the contract is, in this case MIT
                  license and version ^0.8.0
                </Text>
                <CopyBlock
                  text={`// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;`}
                  language="javascript"
                  showLineNumbers={true}
                  theme={a11yDark}
                />
              </ListItem>
              <Heading
                className="ml-1 mb-1"
                as="h2"
                size="xl"
                id="contract-mapping"
              >
                contract mapping
              </Heading>
              <ListItem className="ml-4">
                <Text className="mt-1 " fontSize="2xl">
                  within the contract Melomania {"{ }"} consists of a public
                  string <Code>name</Code> and a public uint{" "}
                  <Code>songCount</Code> which is set to 0 initially. this also
                  includes a mapping of the Song to the contracts{" "}
                  <Code>song</Code>
                </Text>
                <CopyBlock
                  text={`contract Melomania {
  string public name;
  uint256 public imageCount = 0;
  mapping(uint256 => Image) public images;
  ...
  }`}
                  language="javascript"
                  showLineNumbers={true}
                  theme={a11yDark}
                />
              </ListItem>
              <Heading
                className="ml-1 mb-1"
                as="h2"
                size="xl"
                id="song-structs"
              >
                song structs
              </Heading>
              <ListItem className="ml-4">
                <Text className="mt-1 " fontSize="2xl">
                  the song struct contains the following fields:{" "}
                  <Code>
                    id, hash, description, tipAmount, author, likeCount,
                    uploadTime
                  </Code>
                </Text>
                <CopyBlock
                  text={`struct Image {
        uint256 id;
        string hash;
        string description;
        uint256 tipAmount;
        address payable author;
        uint256 likeCount;
        uint256 uploadTime;
}`}
                  language="javascript"
                  showLineNumbers={true}
                  theme={a11yDark}
                />
              </ListItem>
              <Heading className="ml-1 mb-1" as="h2" size="xl" id="events">
                events
              </Heading>
              <ListItem className="ml-4">
                <Text className="mt-1 " fontSize="2xl">
                  each event takes in the same parameters as the song struct
                </Text>
                <CopyBlock
                  text={`event ImageCreated(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author,
        uint256 likeCount,
        uint256 uploadTime,
    );

event ImageTipped(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author,
        uint256 likeCount,
        uint256 uploadTime,
    );

event ImageLiked(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author,
        uint256 likeCount,
        uint256 uploadTime,
    );`}
                  language="javascript"
                  showLineNumbers={true}
                  theme={a11yDark}
                />
              </ListItem>
              <Heading className="ml-1 mb-1" as="h2" size="xl" id="constructor">
                constructor
              </Heading>
              <ListItem className="ml-4">
                <Text className="mt-1 " fontSize="2xl">
                  the constructor is simple, simply setting the name of the
                  contract
                </Text>
                <CopyBlock
                  text={`constructor() {
  name = "Melomania";
}`}
                  language="javascript"
                  showLineNumbers={true}
                  theme={a11yDark}
                />
              </ListItem>
              <Heading className="ml-1 mb-1" as="h2" size="xl" id="functions">
                functions
              </Heading>
              <ListItem className="ml-4">
                <Text className="mt-1 " fontSize="2xl">
                  the following functions are available:{" "}
                  <Code>uploadSong()</Code>,<Code>tipSongOwner()</Code>,
                  <Code>likeSong()</Code>. these functions pass through the song
                  struct and the song id to the contract and then call the
                  events.
                </Text>
                <CopyBlock
                  text={`function uploadImage(string memory _imgHash, string memory _description)
        public
    {
        // Make sure the image hash exists
        require(bytes(_imgHash).length > 0);
        // Make sure image description exists
        require(bytes(_description).length > 0);
        // Make sure uploader address exists
        require(msg.sender != address(0));

        // Increment image id
        imageCount++;

        // Add Image to the contract
        images[imageCount] = Image(
            imageCount,
            _imgHash,
            _description,
            0,
            payable(msg.sender),
            0,
            block.timestamp,
            0
        );
        // Trigger an event
        emit ImageCreated(
            imageCount,
            _imgHash,
            _description,
            0,
            payable(msg.sender),
            0,
            block.timestamp,
            0
        );
    }

function tipImageOwner(uint256 _id) public payable {
        // Make sure the id is valid
        require(_id > 0 && _id <= imageCount);
        // Fetch the image
        Image memory _image = images[_id];
        // Fetch the author
        address payable _author = _image.author;
        // Pay the author by sending them Ether
        payable(address(_author)).transfer(msg.value);
        // Increment the tip amount
        _image.tipAmount = _image.tipAmount + msg.value;
        // Update the image
        images[_id] = _image;
        // Trigger an event
        emit ImageTipped(
            _id,
            _image.hash,
            _image.description,
            _image.tipAmount,
            _author,
            _image.likeCount,
            _image.uploadTime
        );
    }

function likeImage(uint256 _id) public payable {
        require(_id > 0 && _id <= imageCount);
        Image memory _image = images[_id];
        address payable _author = _image.author;
        payable(address(_author)).transfer(msg.value);

        _image.likeCount = _image.likeCount + msg.value;
        images[_id] = _image;

        // Trigger an event
        emit ImageLiked(
            _id,
            _image.hash,
            _image.description,
            _image.tipAmount,
            _author,
            _image.likeCount,
            _image.uploadTime
        );
    }`}
                  language="javascript"
                  showLineNumbers={true}
                  theme={a11yDark}
                />
              </ListItem>
              <Heading className="ml-1 mb-1" as="h2" size="xl" id="final-code">
                final code
              </Heading>
              <ListItem className="ml-4">
                <Text className="mt-1 " fontSize="2xl">
                  the following code is the complete contract.
                </Text>
                <CopyBlock
                  text={`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Melomania {
    string public name;
    uint256 public imageCount = 0;
    mapping(uint256 => Image) public images;

    struct Image {
        uint256 id;
        string hash;
        string description;
        uint256 tipAmount;
        address payable author;
        uint256 likeCount;
        uint256 uploadTime;
    }

    event ImageCreated(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author,
        uint256 likeCount,
        uint256 uploadTime,
    );

    event ImageTipped(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author,
        uint256 likeCount,
        uint256 uploadTime,
    );

    event ImageLiked(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author,
        uint256 likeCount,
        uint256 uploadTime,
    );

    constructor() {
        name = "Melomania";
    }

    function uploadImage(string memory _imgHash, string memory _description)
        public
    {
        // Make sure the image hash exists
        require(bytes(_imgHash).length > 0);
        // Make sure image description exists
        require(bytes(_description).length > 0);
        // Make sure uploader address exists
        require(msg.sender != address(0));

        // Increment image id
        imageCount++;

        // Add Image to the contract
        images[imageCount] = Image(
            imageCount,
            _imgHash,
            _description,
            0,
            payable(msg.sender),
            0,
            block.timestamp,
            0
        );
        // Trigger an event
        emit ImageCreated(
            imageCount,
            _imgHash,
            _description,
            0,
            payable(msg.sender),
            0,
            block.timestamp
            
        );
    }

    function tipImageOwner(uint256 _id) public payable {
        // Make sure the id is valid
        require(_id > 0 && _id <= imageCount);
        // Fetch the image
        Image memory _image = images[_id];
        // Fetch the author
        address payable _author = _image.author;
        // Pay the author by sending them Ether
        payable(address(_author)).transfer(msg.value);
        // Increment the tip amount
        _image.tipAmount = _image.tipAmount + msg.value;
        // Update the image
        images[_id] = _image;
        // Trigger an event
        emit ImageTipped(
            _id,
            _image.hash,
            _image.description,
            _image.tipAmount,
            _author,
            _image.likeCount,
            _image.uploadTime
        );
    }

    function likeImage(uint256 _id) public payable {
        require(_id > 0 && _id <= imageCount);
        Image memory _image = images[_id];
        address payable _author = _image.author;
        payable(address(_author)).transfer(msg.value);

        _image.likeCount = _image.likeCount + msg.value;
        images[_id] = _image;

        // Trigger an event
        emit ImageLiked(
            _id,
            _image.hash,
            _image.description,
            _image.tipAmount,
            _author,
            _image.likeCount,
            _image.uploadTime
        );
    }
}
`}
                  language="javascript"
                  showLineNumbers={true}
                  theme={a11yDark}
                />
              </ListItem>
            </OrderedList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default code;
