// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAWxRzh-6IAPALE-scMrWW2Gl2BNsq76Zs",
    authDomain: "pfe2018-f27c8.firebaseapp.com",
    databaseURL: "https://pfe2018-f27c8.firebaseio.com",
    projectId: "pfe2018-f27c8",
    storageBucket: "pfe2018-f27c8.appspot.com",
    messagingSenderId: "506761310540"
  },
  dialogflow: {
    angularBot: 'babbabf28ca34b21b174d4a2e3707c3c'
  }
};

