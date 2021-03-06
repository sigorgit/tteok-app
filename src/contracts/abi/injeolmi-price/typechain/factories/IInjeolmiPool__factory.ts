/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IInjeolmiPool } from "../IInjeolmiPool";

export class IInjeolmiPool__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IInjeolmiPool {
    return new Contract(address, _abi, signerOrProvider) as IInjeolmiPool;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [],
    name: "swapToIJM",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "swapToKlay",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SwapToIJM",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SwapToKlay",
    type: "event",
  },
];
