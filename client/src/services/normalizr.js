import { schema } from 'normalizr'

export const contestSchema = new schema.Entity(
  'contest',
  {},
  { idAttribute: '_id' }
)
