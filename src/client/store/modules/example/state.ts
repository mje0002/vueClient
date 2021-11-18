import { Example } from '@/client/models/Example.model'

const defaultExample : Example = { profileData: { name: 'client' } , rolesData: [] };

/**
 * The state type definition for Example Module
 */
export type State = Example

/**
 * Base State of Example impelementation
 */
export const state: State = defaultExample
