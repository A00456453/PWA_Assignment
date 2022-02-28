# Let's load some data!

**IndexedDB** is a super helpful tool to storing data. It's available in all modern browsers.

- Transactional key-value database in the browser
- Transactional -> if one action fails, none of the actions of that transaction are applied
- Stores significant amount of unstructured data, including files & blobs
- Can be accessed asynchronously -> can be accessed by service worker!

In this section we are using a wrapper library called [`Dexie.js`](https://dexie.org/)

## To run this app
- Run `npm i` or `npm install` to install the node dev dependencies (http-server to run the app on a development server).
- Run `npm run start` to start the app with [`http-server`](https://github.com/http-party/http-server#readme). 