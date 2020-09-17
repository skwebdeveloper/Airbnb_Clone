import firebase from 'firebase'

    const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCM0DrbNKQqDAA2Uo61YWMBVxFgofTvZUo",
        authDomain: "airbnbclone-8ecb3.firebaseapp.com",
        databaseURL: "https://airbnbclone-8ecb3.firebaseio.com",
        projectId: "airbnbclone-8ecb3",
        storageBucket: "airbnbclone-8ecb3.appspot.com",
        messagingSenderId: "785298356840",
        appId: "1:785298356840:web:1beae2c27826b3d5f699dd"
      });

   const auth = firebase.auth();
   export { auth }