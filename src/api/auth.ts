import auth from '@react-native-firebase/auth';

export const createNewUser = async (email: string, password: string) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export const logInUser = async (email: string, password: string) => {
  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('authenticated', res);
    })
    .catch(err => {
      console.log('invalid user', err);
    });
};

export const logoutUser = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log('Error logging out user');
  }
};
