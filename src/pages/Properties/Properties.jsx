import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import TabsComponent from '../../components/TabsComponent'
import { TabPanel } from 'react-tabs'
import AddNewProperty from './Components/AddNewProperty'
import AddProperty from '../AddProperty'
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore'
import { db } from '../../Config'
import { Box, Image, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SingleProperty } from '../../Redux/Action/SingleProperty'
import { UpdatePropertyAction } from '../../Redux/Action/UpdatePropertyAction'
import Modal from '../../ReUseableComponent/Modal'
import LazyLoadImage from '../../ReUseableComponent/LazyLoadImage'
import { CSVLink } from 'react-csv'

export default function Properties() {
    const [Properties, setProperties] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const PropertiesData = async () => {
        const q = query(collection(db, "/properties"));
        const unsubscribe = await onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                cities.push({ id: doc.id, ...doc.data() });
            });
            setProperties(cities)
        });
    }
    useEffect(() => {
        PropertiesData()
    }, [])


    const HandleNavigateProperty = (item) => {
        dispatch(SingleProperty(item))
        navigate(`/Single`)
    }


    const HandleDelete = async (id) => {
        await deleteDoc(doc(db, "properties", id));
    }

    const HandleUpdate = (item) => {
        navigate(`/${item.id}`)

    }


    const closeModal = () => {
        setIsModalOpen(false);
    }


    return (
        <DefaultLayout>
            <div className="w-full h-[70px] flex justify-end items-center px-10 cursor-pointer">
                <CSVLink filename={'properties.csv'} data={Properties}>Download Csv</CSVLink>
            </div>

            <TabsComponent Header={['Properties', 'Add New']} >
                <TabPanel>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                        {
                            Properties.map((item) => {
                                return (
                                    <Box className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden cursor-pointer" >
                                        <LazyLoadImage onClick={() => HandleNavigateProperty(item)} className="h-48 w-full object-cover" src={item.property_urls[0]} alt="[Property Name]" />
                                        <Box className="p-6">
                                            <Text as="h2" onClick={() => HandleNavigateProperty(item)} className="text-lg font-semibold text-gray-900 mb-2">{item.Property_Name}</Text>
                                            <Text noOfLines={2} onClick={() => HandleNavigateProperty(item)} className="text-gray-700 text-base mb-4">{item.Overview}</Text>
                                            <Box className="flex justify-end">
                                                <button onClick={() => HandleDelete(item.id)} className="px-4 py-2 mr-2 bg-red-500 text-black rounded hover:bg-red-600">Delete</button>
                                                <button onClick={() => HandleUpdate(item)} className="px-4 py-2 bg-cyan-500 text-black rounded hover:bg-blue-600">Update</button>
                                            </Box>
                                        </Box>
                                    </Box>
                                )
                            })
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <AddProperty />
                </TabPanel>

            </TabsComponent>



            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Text>A</Text>
            </Modal>

        </DefaultLayout>
    )
}
