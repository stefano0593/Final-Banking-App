import { Card } from './card';
import { Account } from './account';
import { User } from './user';

const account = new Account(25000, 0.0);
const cont = new Account(2500.0, 6600);
const bntCard = new Card('1111-9999-9999-3333', 'Stefan Calin', '05/08', '123');
export const users = [
    new User('Stefan', 'Calin', 'stefan.calin@gmail.com', '1234', account, bntCard),
    new User('Ion', 'Popescu', 'ion.popescu@gmail.com', '4321', cont),
];

// lista cu useri (datele de logare)
