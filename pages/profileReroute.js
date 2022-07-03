import React, { Component } from "react";
import Link from "next/link";
import "tw-elements";
import { Button, Text } from "@chakra-ui/react";
import moment from "moment";

class Profile extends Component {
  render() {
    return (
      <div>
        <Text
          className="
          text-center
          text-xl
          font-bold
          mb-2
          mt-2
        "
        >
          My Uploads
        </Text>
        <div className="mt-2 flex flex-nowrap justify-center overflow-x-auto">
          {/* if account name is equal to the image author, display the post */}
          {this.props.images.map((image, key) => {
            if (image.author === this.props.account) {
              return (
                <div
                  key={key}
                  className="  rounded-2xl mr-2 mb-2 border border-gray-500 "
                  id="imageList"
                >
                  <a
                    class="relative block p-8 overflow-hidden border border-gray-100 rounded-lg"
                    href=""
                  >
                    <span class="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                    <div class="justify-between sm:flex">
                      <div>
                        <h5 class=" font-bold ">
                          {image.author.length > 0 &&
                            image.author.substring(0, 5) +
                              "..." +
                              image.author.substring(image.author.length - 4)}
                        </h5>
                        <p class="mt-1 text-xs font-medium text-gray-600">
                          Uploaded by:
                        </p>
                      </div>

                      <div class="flex-shrink-0 hidden ml-3 sm:block">
                        <img
                          class="object-cover w-16 h-16 rounded-lg shadow-sm"
                          src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                          alt=""
                        />
                      </div>
                    </div>

                    <div class="mt-4 sm:pr-8">
                      <p class="text-sm text-gray-500">
                        {image.description.length > 33
                          ? image.description.substring(0, 33) + "..."
                          : image.description}
                      </p>
                    </div>

                    <dl class="flex mt-6">
                      <div class="flex flex-col-reverse">
                        <dt class="text-sm font-medium text-gray-600">
                          Published
                        </dt>
                        <dd class="text-xs text-gray-500">
                          {moment.unix(image.uploadTime).format("MMMM Do YYYY")}
                        </dd>
                      </div>

                      <div class="flex flex-col-reverse ml-3 sm:ml-6">
                        <dt class="text-sm font-medium text-gray-600">
                          Like Count
                        </dt>
                        <dd class="text-xs text-gray-500">
                          {window.web3.utils.fromWei(
                            image.likeCount.toString(),
                            "Ether"
                          ) * 100}
                        </dd>
                      </div>
                    </dl>
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Profile;
