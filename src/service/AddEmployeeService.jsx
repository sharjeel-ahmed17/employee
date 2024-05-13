import { child, push, ref, set } from 'firebase/database';
import { db } from '../config/firebase'
import { productEntity } from '../lib/FirebaseEntries'
const dbRef = ref(db);

export const addProduct = (data) => {

    try {
        const productKey = push(child(ref(db), productEntity)).key;
        const productEntityRef = ref(db, productEntity + '/' + productKey)
        const response = set(productEntityRef, {
            pid: productKey,
            ...data
        })

        return response
    } catch (error) {
        console.log(error);

    }
}