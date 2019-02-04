import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startSignUpUser = (email, password) => {
    return () => {
        return firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            console.log('User signed up successfully.');
        }).catch((error) => {
            console.log('Error ': error.message);
        });
    };
};

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startEmailLogin = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    };
};

export const startGoogleLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

export const startPasswordReset = (email) => {
    return () => {
        return firebase.auth().sendPasswordResetEmail(email).then(() => {
            console.log('Sent password reset link.');
        }).catch((error) => {
            console.log('Error ': error.message);
        });
    };
};