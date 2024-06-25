import { getDatabase, push, ref } from "firebase/database";
import app from "./firebaseConfig";
import { getAuth } from "firebase/auth";


const db = getDatabase(app)
const auth = getAuth(app)

export const sendData = (body)=>{
console.log(body);

 const reference = ref(db,"user")
push    (reference,body)
}

export const signUpUser=(email,pass)=>{

}