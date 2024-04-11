/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link ForeignContract}
 * @category Accounts
 * @category generated
 */
export type ForeignContractArgs = {
  chain: number
  address: number[] /* size: 32 */
  tokenBridgeForeignEndpoint: web3.PublicKey
}

export const foreignContractDiscriminator = [
  176, 234, 80, 61, 222, 205, 162, 75,
]
/**
 * Holds the data for the {@link ForeignContract} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class ForeignContract implements ForeignContractArgs {
  private constructor(
    readonly chain: number,
    readonly address: number[] /* size: 32 */,
    readonly tokenBridgeForeignEndpoint: web3.PublicKey
  ) {}

  /**
   * Creates a {@link ForeignContract} instance from the provided args.
   */
  static fromArgs(args: ForeignContractArgs) {
    return new ForeignContract(
      args.chain,
      args.address,
      args.tokenBridgeForeignEndpoint
    )
  }

  /**
   * Deserializes the {@link ForeignContract} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [ForeignContract, number] {
    return ForeignContract.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link ForeignContract} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<ForeignContract> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find ForeignContract account at ${address}`)
    }
    return ForeignContract.fromAccountInfo(accountInfo, 0)[0]
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
    return beetSolana.GpaBuilder.fromStruct(programId, foreignContractBeet)
  }

  /**
   * Deserializes the {@link ForeignContract} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [ForeignContract, number] {
    return foreignContractBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link ForeignContract} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return foreignContractBeet.serialize({
      accountDiscriminator: foreignContractDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link ForeignContract}
   */
  static get byteSize() {
    return foreignContractBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link ForeignContract} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      ForeignContract.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link ForeignContract} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === ForeignContract.byteSize
  }

  /**
   * Returns a readable version of {@link ForeignContract} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      chain: this.chain,
      address: this.address,
      tokenBridgeForeignEndpoint: this.tokenBridgeForeignEndpoint.toBase58(),
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const foreignContractBeet = new beet.BeetStruct<
  ForeignContract,
  ForeignContractArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['chain', beet.u16],
    ['address', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['tokenBridgeForeignEndpoint', beetSolana.publicKey],
  ],
  ForeignContract.fromArgs,
  'ForeignContract'
)
