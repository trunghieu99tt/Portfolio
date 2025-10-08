import axios from "axios";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};
const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,
    headers,
});

export default client;
