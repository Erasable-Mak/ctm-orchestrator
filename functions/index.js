const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

exports.helloWorld = functions.https.onCall((data, context) => {
  return { result: "Hello World + data.uid" };
});

//to delete user from auth
exports.userDeleteFunction = functions.https.onCall((data, context) => {
  return admin
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

//this is called when user is deleted from auth
//here user is deleted from Users collection
exports.deleteUserFromFirestore = functions.auth
  .user()
  .onDelete(async (user) => {
    return await admin
      .firestore()
      .collection("Users")
      .doc(user.uid)
      .collection("Personal information")
      .doc("personal_info")
      .delete()
      .then(() => {
        console.log("Successfully deleted personal information");
        admin
          .firestore()
          .collection("Users")
          .doc(user.uid)
          .collection("Address information")
          .doc("address_info")
          .delete()
          .then(() => {
            console.log("Successfully deleted address information");
            admin
              .firestore()
              .collection("Users")
              .doc(user.uid)
              .delete()
              .then(() => {
                console.log("Successfully deleted basic information");
                return { response: "User deleted Successfully" };
              })
              .catch((error) => {
                console.log("this is error - " + error);
                return { response: "Error deleting user's basic info" };
              });
          })
          .catch((error) => {
            console.log("this is error - " + error);
            return { response: "Error deleting user's address info" };
          });
      })
      .catch((error) => {
        console.log("this is error - " + error);
        return { response: "Error deleting user's personal info" };
      });
  });
