import fs from 'node:fs/promises';
import { PATH_DB } from '../contacts/contacts.js';

export const removeAllContacts = async () => {
  try {
    //   Reading contacts from file
    const contactsData = await fs.readFile(PATH_DB, 'utf-8');
    const contactsOutput = JSON.parse(contactsData);
    contactsOutput.splice(0, contactsOutput.length);

    //   Writing updated contacts into a file
    await fs.writeFile(PATH_DB, JSON.stringify(contactsOutput, null, 2));
    console.log('Contacts were successfully removed from the db-file');
  } catch (error) {
    console.log(
      'This error occured during the attempt of deleting contacts from the db-file',
      error,
    );
  }
};

removeAllContacts();
