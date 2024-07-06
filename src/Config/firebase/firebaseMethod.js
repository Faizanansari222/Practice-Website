import { getDatabase, push, ref } from "firebase/database";
import { db, auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// const navigate= useNavigate()
// export const sendData = (body) => {
//   const { firstName, lastName, email, password } = body;
//   console.log(body);

//   const reference = ref(db, "user");
//   push(reference, body);
// };






















export const signUpUser = async (firstName,lastName,email,password,navigate) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user; //.user se unique ID get kren gy

    console.log("User signed up: ", user);

    await setDoc(doc(db, "users", user.uid), {
      //unique ID hm idhr rakhen gy
      firstName,
      lastName,
      email,
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your are Logined Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/login");
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error}!`,
      // footer: '<a href="#"></a>'
    });
    // console.error("Error signing up: ", error);
    // alert(error.message);
  }
};
// export const signUpUser =(regisData)=>{
//   const {firstName, lastName, email,password, navigate} = regisData

//   createUserWithEmailAndPassword(auth,email, password)
//   addDoc(collection(db, "User"), {
//     firstName,
//     lastName,
//     email,
//   });
//   .then(res=>{
//     // navigate("")
//     Swal.fire({
//       position: "center",
//       icon: "success",
//       title: "Your are Sign-Up Successfully",
//       showConfirmButton: false,
//       timer: 1500
//     });
//     navigate("/login")
//   }).catch(err=>{

//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: `${err}!`,
//       // footer: '<a href="#"></a>'
//     });
//   })
// }

export const loginUser = (email, password, navigate) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your are Logined Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/product",{replace:true});
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err}!`,
        // footer: '<a href="#"></a>'
      });
    });
};

export const forgot = (email, navigate) => {
  sendPasswordResetEmail(auth, email)
    .then((res) => {
      Swal.fire({
        position: "",
        icon: "success",
        title: "Check Email to Change Password",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err}!`,
        // footer: '<a href="#"></a>'
      });
    });
};

// export const sendDataInDB = () => {
//   const dc = doc(db, "user");
//   setDoc(dc, {
//     firstName: "faizan",
//     lastName: "Raza",
//     email: "hDjQO@example.com",
//   })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const sendProductData = async (title, price, description, navigate) => {
  try {
    const dc = await addDoc(collection(db, "products"), { title, price, description });
    navigate("/product");
  } catch (err) {
    console.log(err);
  }
};
// export const productUpload = async (
//   firstName,
//   lastName,
//   email,
//   password,
//   navigate
// ) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;

//     await setDoc(doc(db, "users", user.uid), {
//       firstName,
//       lastName,
//       email,
//     });
//     Swal.fire({
//       position: "center",
//       icon: "success",
//       title: "Your are Logined Successfully",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//     navigate("/login");
//   } catch (error) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: `${error}!`,
//       // footer: '<a href="#"></a>'
//     });
//     // console.error("Error signing up: ", error);
//     // alert(error.message);
//   }
// };


export const logOut = () => {
  signOut (auth) .then(() => {
    console.log("LogOut Successfully");
    // navigate("/login ",{replace:true});
  }) .catch((err) => {
    console.log(err);
  })
} 
