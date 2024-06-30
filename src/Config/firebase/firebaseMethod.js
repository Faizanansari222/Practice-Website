import { getDatabase, push, ref } from "firebase/database";
import app from "./firebaseConfig";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

const db = getFirestore(app);
const auth = getAuth(app)

// const navigate= useNavigate()
// export const sendData = (body) => {
//   const { firstName, lastName, email, password } = body;
//   console.log(body);

//   const reference = ref(db, "user");
//   push(reference, body);
// };

export const signUpUser =(email,password, navigate)=>{
  createUserWithEmailAndPassword(auth,email, password) .then(res=>{
    // navigate("")
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your are Sign-Up Successfully",
      showConfirmButton: false,
      timer: 1500
    });
    navigate("/login")
  }).catch(err=>{

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${err}!`,
      // footer: '<a href="#"></a>'
    });
  })
}

export const loginUser=(email,password, navigate)=>{
signInWithEmailAndPassword(auth,email,password).then(res=>{
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your are Logined Successfully",
    showConfirmButton: false,
    timer: 1500
  });
  navigate("/product")
}).catch(err=>{

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${err}!`,
    // footer: '<a href="#"></a>'
  });
})

}

export const forgot =(email,navigate)=>{
sendPasswordResetEmail(auth, email).then(res=>{
  Swal.fire({
    position: "",
    icon: "success",
    title: "Check Email to Change Password",
    showConfirmButton: false,
    timer: 1500
  });
  navigate('/login')
}).catch(err=>{
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${err}!`,
    // footer: '<a href="#"></a>'
  });
})

}


export const sendDataInDB = () => {
const dc = doc( db, "user");
setDoc(dc, { firstName:"faizan", lastName:'Raza', email:'hDjQO@example.com' }).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})
 
}