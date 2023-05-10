import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import CardLayout from '../../components/CardLayout'
import { Investing } from '../../js/Testimonials'
import { Box } from "@chakra-ui/react"
import TabsComponent from '../../components/TabsComponent'
import { TabPanel } from 'react-tabs'

export default function Testimonials() {
    return (
        <DefaultLayout>
            <TabsComponent Header={["Invest", 'Add New']}>

                <TabPanel>
                    <Box className="w-full h-screen grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                        {
                            Investing.map((item) => {
                                return (
                                    <CardLayout title={item.title} img={item.img} description={item.Description} />

                                )
                            })
                        }
                    </Box>
                </TabPanel>
            </TabsComponent>

        </DefaultLayout>
    )
}
