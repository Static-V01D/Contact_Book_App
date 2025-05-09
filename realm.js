import Realm from 'realm';
import { ContactSchema } from './schemas/ContactSchema';

export const getRealm = async () => {
  return await Realm.open({
    schema: [ContactSchema],
    schemaVersion: 1,
  });
};
