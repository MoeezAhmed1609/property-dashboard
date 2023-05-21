import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import { Box, Image, Table, TableContainer, Text } from '@chakra-ui/react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../Config';


export default function User() {
    const [Users, setUsers] = useState([]);

    async function getData() {
        const q = query(collection(db, "users"));
        const unsubscribe = await onSnapshot(q, (querySnapshot) => {
            const cities = [...Users];
            querySnapshot.forEach((doc) => {
                cities.push({ id: doc.id, ...doc.data() });
            });
            console.log(cities)
            setUsers(cities)
        });
    }

    useEffect(() => {
        getData()
        console.log(Users)

    }, [])

    return (
        <Box>
            <DefaultLayout>
                <Box className="w-full h-auto ">


                    <div className="container mx-auto p-4">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">Image</th>
                                        <th className="py-3 px-6 text-left">Name</th>
                                        <th className="py-3 px-6 text-left">Email</th>
                                        <th className="py-3 px-6 text-left">Status</th>
                                        <th className="py-3 px-6 text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    <tr className="border-b border-gray-300 hover:bg-gray-100">
                                        <td className="py-3 px-6 text-left">
                                            <img
                                                src="https://placehold.co/600x400"
                                                alt="User Image"
                                                className="h-8 w-8 rounded-full"
                                            />
                                        </td>
                                        <td className="py-3 px-6 text-left">John Doe</td>
                                        <td className="py-3 px-6 text-left">john@example.com</td>
                                        <td className="py-3 px-6 text-left">Active</td>
                                        <td className="py-3 px-6 text-left">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                                Action
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 hover:bg-gray-100">
                                        <td className="py-3 px-6 text-left">
                                            <img
                                                src="https://placehold.co/600x400"
                                                alt="Placeholder Image"
                                                className="h-8 w-8 rounded-full"
                                            />
                                        </td>
                                        <td className="py-3 px-6 text-left">Jane Smith</td>
                                        <td className="py-3 px-6 text-left">jane@example.com</td>
                                        <td className="py-3 px-6 text-left">Inactive</td>
                                        <td className="py-3 px-6 text-left">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                                Action
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Box>
            </DefaultLayout>
        </Box>
    )
}
