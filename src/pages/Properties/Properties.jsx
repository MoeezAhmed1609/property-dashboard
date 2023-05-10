import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import TabsComponent from '../../components/TabsComponent'
import { TabPanel } from 'react-tabs'


export default function Properties() {
    return (
        <DefaultLayout>
            <TabsComponent Header={['Properties','Add New']}>
                <TabPanel>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                        <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1681846291878-1103198eb2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="[Property Name]" />
                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-2">Istanbul</h2>
                            <p className="text-gray-700 text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque quas iure impedit aliquam perferendis quaerat id eum aspernatur adipisci?</p>
                            <div className="flex justify-end">
                                <button className="px-4 py-2 mr-2 bg-red-500 text-black rounded hover:bg-red-600">Delete</button>
                                <button className="px-4 py-2 bg-cyan-500 text-black rounded hover:bg-blue-600">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
                </TabPanel>
               
            </TabsComponent>

        </DefaultLayout>
    )
}
