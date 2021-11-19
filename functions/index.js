const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

exports.helloWorld = functions.https.onCall((data, context) => {
  return { result: "Hello World + data.uid" };
});

exports.userDeleteFunction = functions.https.onCall((data, context) => {
  admin
    .auth()
    .deleteUser(data.uid)
    .then(() => {
      console.log("Successfully deleted user");
      return { result: "Successfully deleted user" };
    })
    .catch((error) => {
      console.log("Error deleting user:", error);
      return { result: "Error deleting user" };
    });
});

exports.deleteUserFromFirestore = functions.auth.user().onDelete((user) => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .delete()
    .then(() => {
      console.log("Successfully deleted user from Firestore");
      return { result: "Successfully deleted user from Firestore" };
    })
    .catch((error) => {
      console.log("Error deleting user from Firestore:", error);
      return { result: "Error deleting user from Firestore" };
    });
});
