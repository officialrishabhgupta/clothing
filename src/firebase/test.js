import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { firestore } from './firebase.utils';

const firebase =firebase.firestore();

firestore.collection('users').doc('XZVV68gChyhmo5G2fYM6').collection('cartItems').doc('BFFgcVTZVtoBXlcpgKRt')
firestore.doc('/users/XZVV68gChyhmo5G2fYM6/cartItems/BFFgcVTZVtoBXlcpgKRt');
firestore.collection('/users/XZVV68gChyhmo5G2fYM6/cartItems');

export const firebase;

