import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import TabsComponent from '../../components/TabsComponent'
import { TabPanel } from 'react-tabs'
import AddNewProperty from './Components/AddNewProperty'
import AddProperty from '../AddProperty'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../../Config'

export default function Properties() {
    const [Properties, setProperties] = useState([]);

    const PropertiesData = async () => {
        const q = query(collection(db, "/properties"));
        const unsubscribe = await onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                cities.push({ id: doc.id, ...doc.data() });
            });
            setProperties(cities)
            console.log(Testimonial);
        });
    }
    useEffect(() => {
        PropertiesData()
    }, [])


    return (
        <DefaultLayout>
            <TabsComponent Header={['Properties', 'Add New']}>
                <TabPanel>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                        {
                            Properties.map((item) => {
                                return (
                                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                                        <img className="h-48 w-full object-cover" src={item.property_urls[0]} alt="[Property Name]" />
                                        <div className="p-6">
                                            <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.Property_Name}</h2>
                                            <p className="text-gray-700 text-base mb-4">{item.Overview}</p>
                                            <div className="flex justify-end">
                                                <button className="px-4 py-2 mr-2 bg-red-500 text-black rounded hover:bg-red-600">Delete</button>
                                                <button className="px-4 py-2 bg-cyan-500 text-black rounded hover:bg-blue-600">Update</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <AddProperty />
                </TabPanel>

            </TabsComponent>

        </DefaultLayout>
    )
}
