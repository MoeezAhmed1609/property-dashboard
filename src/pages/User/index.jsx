import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import { Box, Image, Text } from '@chakra-ui/react'

export default function User() {
    return (
        <Box>
            <DefaultLayout>
                <Box className="w-full h-auto p-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
                    <Box className="flex flex-col md:flex-row items-center p-4 bg-white shadow-md rounded-lg">
                        <Box className="md:w-1/4 mb-4 md:mb-0">
                            <Image
                                src="https://via.placeholder.com/150"
                                alt="Profile Picture"
                                className="rounded-full w-24 h-24 object-cover"
                            />
                        </Box>
                        <Box className="md:w-3/4  md:pl-6">
                            <Text className="text-lg font-semibold mb-1 mt-2">John Doe</Text>
                            <Text className="text-gray-600 mb-1">Frontend Developer</Text>
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
                    <Box className="flex flex-col md:flex-row items-center p-4 bg-white shadow-md rounded-lg">
                        <Box className="md:w-1/4 mb-4 md:mb-0">
                            <Image
                                src="https://via.placeholder.com/150"
                                alt="Profile Picture"
                                className="rounded-full w-24 h-24 object-cover"
                            />
                        </Box>
                        <Box className="md:w-3/4  md:pl-6">
                            <Text className="text-lg font-semibold mb-1 mt-2">John Doe</Text>
                            <Text className="text-gray-600 mb-1">Frontend Developer</Text>
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

                </Box>
            </DefaultLayout>
        </Box>
    )
}
