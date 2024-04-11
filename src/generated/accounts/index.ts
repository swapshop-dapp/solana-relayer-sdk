export * from './ForeignContract'
export * from './Order'
export * from './RedeemerConfig'
export * from './SenderConfig'

import { ForeignContract } from './ForeignContract'
import { Order } from './Order'
import { RedeemerConfig } from './RedeemerConfig'
import { SenderConfig } from './SenderConfig'

export const accountProviders = {
  ForeignContract,
  Order,
  RedeemerConfig,
  SenderConfig,
}
