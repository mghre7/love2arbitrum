/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { MessageTester, MessageTesterInterface } from '../MessageTester'

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'inbox',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'message',
        type: 'bytes32',
      },
    ],
    name: 'addMessageToInbox',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'messageType',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'blockNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'inboxSeqNum',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasPriceL1',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: 'messageDataHash',
        type: 'bytes32',
      },
    ],
    name: 'messageHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506101c5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632f52ccc21461003b578063a3b392091461009a575b600080fd5b610088600480360360e081101561005157600080fd5b5060ff813516906001600160a01b036020820135169060408101359060608101359060808101359060a08101359060c001356100bd565b60408051918252519081900360200190f35b610088600480360360408110156100b057600080fd5b50803590602001356100da565b60006100ce888888888888886100ed565b98975050505050505050565b60006100e68383610163565b9392505050565b6040805160f89890981b6001600160f81b0319166020808a019190915260609790971b6bffffffffffffffffffffffff19166021890152603588019590955260558701939093526075860191909152609585015260b5808501919091528151808503909101815260d59093019052815191012090565b60408051602080820194909452808201929092528051808303820181526060909201905280519101209056fea264697066735822122079b696ba0b863c03b85a2df389a0f9bf6e233968a3988339a64069123ca7773964736f6c634300060b0033'

export class MessageTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MessageTester> {
    return super.deploy(overrides || {}) as Promise<MessageTester>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): MessageTester {
    return super.attach(address) as MessageTester
  }
  connect(signer: Signer): MessageTester__factory {
    return super.connect(signer) as MessageTester__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): MessageTesterInterface {
    return new utils.Interface(_abi) as MessageTesterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MessageTester {
    return new Contract(address, _abi, signerOrProvider) as MessageTester
  }
}
