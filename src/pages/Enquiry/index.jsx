import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import { collection, deleteDoc, doc, getDoc, onSnapshot, query, updateDoc } from 'firebase/firestore';
import { db } from '../../Config';
import { useDispatch } from 'react-redux';
import { SingleProperty } from '../../Redux/Action/SingleProperty';
import { useNavigate } from 'react-router-dom';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
export default function Enquiry() {

    const [Enquiry, setEnquiry] = useState([]);
    const [Status, setStatus] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const PropertiesData = async () => {
        const q = query(collection(db, "/EnquiryForm"));
        const unsubscribe = await onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                cities.push({ id: doc.id, ...doc.data() });
            });
            console.log(cities)
            setEnquiry(cities)
        });
    }
    useEffect(() => {
        PropertiesData()
    }, [])




    const HandleDeal = async (id, fieldID) => {
        const washingtonRef = doc(db, "properties", id);
        const washingtonRef2 = doc(db, "EnquiryForm", fieldID);
        // await updateDoc(washingtonRef, {
        //     isActive: false,
        // });
        await updateDoc(washingtonRef2, {
            Deal: 'Done'
        });

        await deleteDoc(doc(db, "properties", id));
    }


    const HandleSingleProperty = async (id) => {
        const docRef = doc(db, "properties", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            dispatch(SingleProperty(docSnap.data()))
            navigate('/Single')
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }


    const HandleActiveProperty = async (propertyid, EnquiryFormId, Active) => {

        const propertyRef = doc(db, "properties", propertyid);
        await updateDoc(propertyRef, {
            isActive: Active ? !Active : true,
        });

        const washingtonRef2 = doc(db, "EnquiryForm", EnquiryFormId);
        await updateDoc(washingtonRef2, {
            Active: Active ? !Active : true,
        });


    }

    return (
        <DefaultLayout>
            <div className="w-full h-[60px] border-2 border-white mb-2 flex justify-end items-center pr-2">
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Purpose
                    </MenuButton>
                    <MenuList className='pl-2'>
                        
                        <MenuItem bgColor={'#fff '} onClick={()=>setStatus('Rent')} className='mx-1 border border-black  py-2 px-5 rounded-sm'>Rent</MenuItem>
                        <MenuItem bgColor={'#fff '} onClick={()=>setStatus('Buy')} className='mx-1 border border-black  py-2 px-5 rounded-sm'>Buy</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Phone No
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Property ID
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Purpose
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Deal
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Active
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        Enquiry.filter(item => Status?item.purpose == Status : item).map((item) => {
                                            return (
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {item.name}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{item.Email}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{item.phone}</div>
                                                    </td>
                                                    <td onClick={() => HandleSingleProperty(item.propertyID)} className="px-6 py-4 whitespace-nowrap cursor-pointer">
                                                        <div className="text-sm text-gray-900">{item.propertyID}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-3 inline-flex text-xs border-2  leading-5 font-semibold cursor-pointer rounded-full hover:bg-[#6ee7b7] hover:text-white text-green-800" style={{ borderColor: '#6ee7b7' }}>
                                                            {item.purpose}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span onClick={() => HandleDeal(item.propertyID, item.id)} className="px-3 inline-flex text-xs border-2  leading-5 font-semibold cursor-pointer rounded-full hover:bg-[#6ee7b7] hover:text-white text-green-800" style={{ borderColor: '#6ee7b7' }}>
                                                            {item.Deal}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span onClick={() => HandleActiveProperty(item.propertyID, item.id, item.Active)} className="px-3 inline-flex text-xs border-2  leading-5 font-semibold cursor-pointer rounded-full hover:bg-[#6ee7b7] hover:text-white text-green-800" style={{ borderColor: '#6ee7b7' }}>
                                                            {item.Active + ''}
                                                        </span>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </DefaultLayout>
    )
}
