export const abi = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "attributeOwnership",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAttributeOwner",
    inputs: [
      {
        name: "assetContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "attribute",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getGamePermissions",
    inputs: [
      {
        name: "game",
        type: "address",
        internalType: "address",
      },
      {
        name: "assetContract",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTokenAttributes",
    inputs: [
      {
        name: "game",
        type: "address",
        internalType: "address",
      },
      {
        name: "assetContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "attributes",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes[]",
        internalType: "bytes[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "grantAssetPermission",
    inputs: [
      {
        name: "game",
        type: "address",
        internalType: "address",
      },
      {
        name: "assetContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "attributes",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "hasPermissions",
    inputs: [
      {
        name: "game",
        type: "address",
        internalType: "address",
      },
      {
        name: "assetContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "attributes",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "registerGame",
    inputs: [
      {
        name: "game",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registeredGames",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revokeAssetPermission",
    inputs: [
      {
        name: "game",
        type: "address",
        internalType: "address",
      },
      {
        name: "assetContract",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "validatePermissions",
    inputs: [
      {
        name: "game",
        type: "address",
        internalType: "address",
      },
      {
        name: "assetContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "attributes",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "AttributePermissionGranted",
    inputs: [
      {
        name: "game",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "assetContract",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "attributes",
        type: "bytes32[]",
        indexed: false,
        internalType: "bytes32[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AttributePermissionRevoked",
    inputs: [
      {
        name: "game",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "assetContract",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "GameRegistered",
    inputs: [
      {
        name: "game",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "registeredBy",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "GameUnregistered",
    inputs: [
      {
        name: "game",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
] as const;
