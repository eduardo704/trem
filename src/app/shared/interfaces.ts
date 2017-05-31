import * as firebase from 'firebase/app';
import { AngularFireAuth, } from 'angularfire2/auth';

export interface Programa {
    titulo: string;
    subTitulo: string;
    desc: string;
    audio: string;
    author: any;
    imagem: string;
    $key: string;
    data: Date;
}

export interface MyUser extends firebase.User {
    email: string;
    displayName: string;
    photoURL: string;
    uid: string;
}
