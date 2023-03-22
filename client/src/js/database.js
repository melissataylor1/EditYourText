import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Logic to method that accepts some content and adds it to the database
export const putDb = async (content) => {

  console.log('Post to the database');
//opens the database with the name "jate" and version 1
  const textDB = await openDB("jate", 1);

  const tx = textDB.transaction("jate", "readwrite");
//creates a transaction with the objectStore "jate"
  const store = tx.objectStore("jate");
//saves an object with an id of 1 and a value of content
  const request = store.put({ id: 1, value: content });
//logs out the result of the request
  const result = await request;
  console.log('data saved to the db 🚀 ', result);
  console.error('Not implemented');

}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
