// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'utnplataforma',
    appId: '1:809274284014:web:ad72072ee29ac7ef72a0ff',
    databaseURL: 'https://utnplataforma-default-rtdb.firebaseio.com',
    storageBucket: 'utnplataforma.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyD8wq_B105dW5hjm7cZciGl8pLGJe8mEXg',
    authDomain: 'utnplataforma.firebaseapp.com',
    messagingSenderId: '809274284014',
  },
  production: false,
  endpoint: 'http://localhost:3001/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
