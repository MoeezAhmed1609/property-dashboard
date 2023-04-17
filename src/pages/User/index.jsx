import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import { Box, Image, Text } from '@chakra-ui/react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../Config';


export default function User() {
    const [Users, setUsers] = useState([]);

    async function getData() {
        const q = query(collection(db, "Users"));
        const unsubscribe =await  onSnapshot(q, (querySnapshot) => {
            const cities = [...Users];
            querySnapshot.forEach((doc) => {
                cities.push({ id: doc.id, ...doc.data() });
            });
            console.log(cities)
            setUsers(cities)
        });
    }

    useEffect( () => {
         getData()
       console.log(Users)
        
    }, [])

    return (
        <Box>
            <DefaultLayout>
                <Box className="w-full h-auto p-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
                    {
                        Users.map((item)=>{
                            return (
                                <Box className="flex flex-col md:flex-row items-center p-4 bg-white shadow-md rounded-lg">
                                <Box className="md:w-1/4 mb-4 md:mb-0">
                                    <Image
                                        src={item.Profile}
                                        alt="Profile Picture"
                                        className="rounded-full w-24 h-24 object-cover"
                                    />
                                </Box>
                                <Box className="md:w-3/4  md:pl-6">
                                    <Text className="text-lg font-semibold mb-1 mt-2">{item.name}</Text>
                                    <Text className="text-gray-600 mb-1">Admin</Text>
                                    <Box className="flex items-center">
                                        <a
                                            href="#"
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
                                        >
                                            Edit
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                                        >
                                            Delete
                                        </a>
                                    </Box>
                                </Box>
                            </Box>
                            )
                        })
                    }
                   
             

                </Box>
            </DefaultLayout>
        </Box>
    )
}
