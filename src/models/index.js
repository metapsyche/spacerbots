// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blueprints, Builds, Structs, Sembles, Spacers } = initSchema(schema);

export {
  Blueprints,
  Builds,
  Structs,
  Sembles,
  Spacers
};