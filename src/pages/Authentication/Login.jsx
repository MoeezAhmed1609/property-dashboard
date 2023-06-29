import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { auth, db } from '../../Config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { LoginState } from '../../Redux/Action/LoginState';
import { Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { USERDATA } from '../../Redux/Action/UserData';


export default function Login() {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        console.log(Email)
        console.log(password)
        e.preventDefault();

        dispatch(LoginState(""))

        await signInWithEmailAndPassword(auth, Email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)

                getUserData(user)
                dispatch(LoginState(user))
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorMessage)
            });
    };



    const getUserData = async (user) => {
        const docRef = doc(db, "/Dashboard_Users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log({id:doc.id,...docSnap.data()});
            dispatch(USERDATA({id:doc.id,...docSnap.data()}))
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-300 rounded-md py-2 pl-8 pr-4 focus:outline-none focus:border-blue-500"
                                placeholder="Email"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <FaEnvelope className="text-gray-500" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-300 rounded-md py-2 pl-8 pr-4 focus:outline-none focus:border-blue-500"
                                placeholder="Password"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <FaLock className="text-gray-500" />
                            </div>
                        </div>
                    </div>
                    <Text textDecoration={"underline"} className='cursor-pointer' paddingBottom={2}>If you not Have account please <Link to="/register">Register</Link> </Text>
                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-blue-600  font-semibold py-2 px-4 rounded-md transition duration-300 text-white"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
