import fs from 'node:fs/promises';
import { PATH_DB } from '../contacts/contacts.js';

export const countContacts = async () => {
  try {
    //   Reading contacts from file
    const contactsData = await fs.readFile(PATH_DB, 'utf-8');
    const contactsOutput = JSON.parse(contactsData);
    return contactsOutput.length;
  } catch (error) {
    console.log(
      'This error occured during the attempt to count the contacts qty written in db-file',
      error,
    );
  }
};

console.log(await countContacts());
