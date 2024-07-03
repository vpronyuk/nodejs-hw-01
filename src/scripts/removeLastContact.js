import fs from 'node:fs/promises';
import { PATH_DB } from '../contacts/contacts.js';

export const removeLastContact = async () => {
  try {
    //   Reading contacts from file
    const contactsData = await fs.readFile(PATH_DB, 'utf-8');
    const contactsOutput = JSON.parse(contactsData);

    if (contactsOutput.length > 0) {
      contactsOutput.pop();

      //   Writing updated contacts into a file
      await fs.writeFile(PATH_DB, JSON.stringify(contactsOutput, null, 2));
      console.log('The last contact was successfully removed from the db-file');
    } else {
      console.log('The array is empty!');
    }
  } catch (error) {
    console.log(
      'This error occured during the attempt of deleting the last contact from the db-file',
      error,
    );
  }
};

removeLastContact();
