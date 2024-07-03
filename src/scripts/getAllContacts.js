import fs from 'node:fs/promises';
import { PATH_DB } from '../contacts/contacts.js';

export const getAllContacts = async () => {
  try {
    //   Reading contacts from file
    const contactsData = await fs.readFile(PATH_DB, 'utf-8');
    const contactsOutput = JSON.parse(contactsData);
    return contactsOutput;
  } catch (error) {
    console.log(
      'This error occured during the attempt of getting the contacts from the db-file',
      error,
    );
  }
};

console.log(await getAllContacts());
