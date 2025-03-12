import mongoose from "mongoose";
import contacts from './constacts';
import contactlist from "./contactlist";

await mongoose.connect('mongodb://localhost:27017/contacts');

const c1 = new contacts({
    name : 'david',
    number : 7181234567,
});

await c1.save();

const contactlist1 = new contactlist({
    name: 'mycontacts'
});

await contactlist1.contacts.push(c1);

await contactlist1.save();