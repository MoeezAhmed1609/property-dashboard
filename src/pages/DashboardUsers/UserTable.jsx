import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../Config';
import { useDispatch } from 'react-redux';
import { Dashboard } from '../../Redux/Action/Dashboard';
import LoadingModal1 from '../../ReUseableComponent/LaodingModal1';

export default function UserTable() {
    const [Users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);


    async function getData() {
        setIsLoading(true);
        const q = query(collection(db, "Dashboard_Users"));

        const unsubscribe = await onSnapshot(q, (querySnapshot) => {
            const cities = [...Users];
            querySnapshot.forEach((doc) => {
                cities.push({ id: doc.id, ...doc.data() });
            });
            console.log(cities)
            setIsLoading(false);
            dispatch(Dashboard(cities))
            setUsers(cities)
        });
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
        {
            isLoading ? <LoadingModal1 isLoading={isLoading} /> :  <div className="container mx-auto p-4">
            <div className="overflow-x-auto">
                <table className="table-auto w-full bg-[#ff6b6b] rounded-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left text-[#ffffff]">Name</th>
                            <th className="py-3 px-6 text-left text-[#ffffff]">Email</th>
                            <th className="py-3 px-6 text-left text-[#ffffff]">Phone</th>
                            <th className="py-3 px-6 text-left text-[#ffffff]">Tags</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {
                            Users.map((item) => {
                                return (
                                    <tr className="border-b border-gray-300 hover:bg-gray-100">

                                        <td className="py-3 px-6 text-left text-[#ffffff]">{item.name}</td>
                                        <td className="py-3 px-6 text-left text-[#ffffff]">{item.email}</td>
                                        <td className="py-3 px-6 text-left text-[#ffffff]">{item.phone}</td>
                                        <td className="py-3 px-6 text-left text-[#ffffff]">{item.AuthScreens}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
        }
           

        </>

    )
}
