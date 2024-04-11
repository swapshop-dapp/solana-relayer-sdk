/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { Claimer, claimerBeet } from '../types/Claimer'

/**
 * Arguments used to create {@link Order}
 * @category Accounts
 * @category generated
 */
export type OrderArgs = {
  makerFee: number
  takerFee: number
  chainId: number
  claimDeadline: beet.bignum
  amount: beet.bignum
  claimer: Claimer
  buyer: web3.PublicKey
  seller: web3.PublicKey
  token: web3.PublicKey
}

export const orderDiscriminator = [134, 173, 223, 185, 77, 86, 28, 51]
/**
 * Holds the data for the {@link Order} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Order implements OrderArgs {
  private constructor(
    readonly makerFee: number,
    readonly takerFee: number,
    readonly chainId: number,
    readonly claimDeadline: beet.bignum,
    readonly amount: beet.bignum,
    readonly claimer: Claimer,
    readonly buyer: web3.PublicKey,
    readonly seller: web3.PublicKey,
    readonly token: web3.PublicKey
  ) {}

  /**
   * Creates a {@link Order} instance from the provided args.
   */
  static fromArgs(args: OrderArgs) {
    return new Order(
      args.makerFee,
      args.takerFee,
      args.chainId,
      args.claimDeadline,
      args.amount,
      args.claimer,
      args.buyer,
      args.seller,
      args.token
    )
  }

  /**
   * Deserializes the {@link Order} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [Order, number] {
    return Order.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Order} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<Order> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find Order account at ${address}`)
    }
    return Order.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      '2gjgMP2Z9ESfnLMAPvDonNnNUTjVq9eJvvvs9wgJsuUp'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, orderBeet)
  }

  /**
   * Deserializes the {@link Order} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Order, number] {
    return orderBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link Order} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return orderBeet.serialize({
      accountDiscriminator: orderDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Order}
   */
  static get byteSize() {
    return orderBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Order} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Order.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link Order} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === Order.byteSize
  }

  /**
   * Returns a readable version of {@link Order} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      makerFee: this.makerFee,
      takerFee: this.takerFee,
      chainId: this.chainId,
      claimDeadline: (() => {
        const x = <{ toNumber: () => number }>this.claimDeadline
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      amount: (() => {
        const x = <{ toNumber: () => number }>this.amount
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      claimer: 'Claimer.' + Claimer[this.claimer],
      buyer: this.buyer.toBase58(),
      seller: this.seller.toBase58(),
      token: this.token.toBase58(),
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const orderBeet = new beet.BeetStruct<
  Order,
  OrderArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['makerFee', beet.u8],
    ['takerFee', beet.u8],
    ['chainId', beet.u16],
    ['claimDeadline', beet.u64],
    ['amount', beet.u64],
    ['claimer', claimerBeet],
    ['buyer', beetSolana.publicKey],
    ['seller', beetSolana.publicKey],
    ['token', beetSolana.publicKey],
  ],
  Order.fromArgs,
  'Order'
)
