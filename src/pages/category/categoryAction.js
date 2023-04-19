import { toast } from "react-toastify"
import { db } from "../../config/firebase-config"
import {addDoc,collection } from "firebase/firestore"

export const addNewCategoryAction =  (obj) =>async dispatch=>{
    try {
        const responsePending = addDoc(collection(db,'category'), obj)
        toast.promise(responsePending,{
            pending: "please wait"
        })

        const docRef = await responsePending
        if(docRef?.id){

            toast.success("New Category has been added successfully")
            return
        }
        toast.error("Error, unable to add the category")
    } catch (error) {
        console.log(error)
    }
}