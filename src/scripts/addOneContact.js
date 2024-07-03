import fs from 'node:fs/promises';
import { PATH_DB } from '../contacts/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    //   Reading contacts from file
    const contactsData = await fs.readFile(PATH_DB, 'utf-8');
    const contactsOutput = JSON.parse(contactsData);

    // Adding of new contact to the array
    const newContact = createFakeContact();
    contactsOutput.push(newContact);

    //   Writing updated contacts into a file
    await fs.writeFile(PATH_DB, JSON.stringify(contactsOutput, null, 2));
    console.log(
      'One additional contacts was successfully written into the db-file',
    );
  } catch (error) {
    console.log(
      'This error occured during the attempt to record the contact to the db-file',
      error,
    );
  }
};

addOneContact();
