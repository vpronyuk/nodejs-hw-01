import fs from 'node:fs/promises';
import { PATH_DB } from '../contacts/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    //   Reading contacts from file
    const contactsData = await fs.readFile(PATH_DB, 'utf-8');
    const contactsOutput = JSON.parse(contactsData);

    // Generation of new contacts
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    // Adding of new contacts array to the existing contacts array
    const updatedContacts = [...contactsOutput, ...newContacts];

    //   Writing updated contacts into a file
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log('Contacts were successfully written into the db-file');
  } catch (error) {
    console.log(
      'This error occured during the attempt to record the contacts to the db-file',
      error,
    );
  }
};

await generateContacts(5);
