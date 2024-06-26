/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import * as beet from '@metaplex-foundation/beet'
import {
  OutboundTokenBridgeAddresses,
  outboundTokenBridgeAddressesBeet,
} from '../types/OutboundTokenBridgeAddresses'

/**
 * Arguments used to create {@link SenderConfig}
 * @category Accounts
 * @category generated
 */
export type SenderConfigArgs = {
  owner: web3.PublicKey
  bump: number
  tokenBridge: OutboundTokenBridgeAddresses
  finality: number
}

export const senderConfigDiscriminator = [0, 241, 220, 77, 167, 128, 79, 152]
/**
 * Holds the data for the {@link SenderConfig} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class SenderConfig implements SenderConfigArgs {
  private constructor(
    readonly owner: web3.PublicKey,
    readonly bump: number,
    readonly tokenBridge: OutboundTokenBridgeAddresses,
    readonly finality: number
  ) {}

  /**
   * Creates a {@link SenderConfig} instance from the provided args.
   */
  static fromArgs(args: SenderConfigArgs) {
    return new SenderConfig(
      args.owner,
      args.bump,
      args.tokenBridge,
      args.finality
    )
  }

  /**
   * Deserializes the {@link SenderConfig} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [SenderConfig, number] {
    return SenderConfig.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link SenderConfig} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<SenderConfig> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find SenderConfig account at ${address}`)
    }
    return SenderConfig.fromAccountInfo(accountInfo, 0)[0]
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
    return beetSolana.GpaBuilder.fromStruct(programId, senderConfigBeet)
  }

  /**
   * Deserializes the {@link SenderConfig} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [SenderConfig, number] {
    return senderConfigBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link SenderConfig} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return senderConfigBeet.serialize({
      accountDiscriminator: senderConfigDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link SenderConfig}
   */
  static get byteSize() {
    return senderConfigBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link SenderConfig} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      SenderConfig.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link SenderConfig} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === SenderConfig.byteSize
  }

  /**
   * Returns a readable version of {@link SenderConfig} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      owner: this.owner.toBase58(),
      bump: this.bump,
      tokenBridge: this.tokenBridge,
      finality: this.finality,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const senderConfigBeet = new beet.BeetStruct<
  SenderConfig,
  SenderConfigArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['owner', beetSolana.publicKey],
    ['bump', beet.u8],
    ['tokenBridge', outboundTokenBridgeAddressesBeet],
    ['finality', beet.u8],
  ],
  SenderConfig.fromArgs,
  'SenderConfig'
)
