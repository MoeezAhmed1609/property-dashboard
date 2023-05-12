import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import CardLayout from '../../components/CardLayout'
import { Investing } from '../../js/Testimonials'
import { Box } from "@chakra-ui/react"
import TabsComponent from '../../components/TabsComponent'
import { TabPanel } from 'react-tabs'
import AddTestimonials from './Components/AddTestimonials'
import { db } from '../../Config'
import { collection, onSnapshot, query } from 'firebase/firestore'

export default function Testimonials() {

    const [Testimonial,setTestimonial] = useState([]);

    const TestimonialFetch = async () =>{
        const q = query(collection(db, "/Testimonials"));
        const unsubscribe = await onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                cities.push(doc.data());
            });
            setTestimonial(cities)
            console.log(Testimonial);
        });
       

    }

    useEffect(()=>{
        TestimonialFetch()
    },[])


    return (
        <DefaultLayout>
            <TabsComponent Header={["Invest", 'Add New']}>

                <TabPanel>
                    <Box className="w-full h-screen grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                        {
                            Testimonial.map((item) => {
                                return (
                                    <CardLayout title={item.Title} img={item.img} description={item.desc} />

                                )
                            })
                        }
                    </Box>
                </TabPanel>
                <TabPanel>
                    <AddTestimonials />
                </TabPanel>
            </TabsComponent>

        </DefaultLayout>
    )
}