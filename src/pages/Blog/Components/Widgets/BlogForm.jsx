import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from '@chakra-ui/react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react'
import { db, storage } from '../../../../Config';
import LoadingModal from '../../../../ReUseableComponent/LoadingModal';
import { addDoc, collection } from 'firebase/firestore';

export default function BlogForm() {
    const [Images,setImages] = useState();
    const [title,setTitle] = useState();
    const [desc,setDesc] = useState();
    const [loading,setLoading] = useState(false);
    const [urls,setUrls] = useState([]);

    


    const PhotoSave = async (event) => {
        console.log(event.target.files);
        const files = event.target.files
        var urlsPush = [...urls]
        var reference = []
    
        for (var i = 0; i < files.length; i++) {
          const storageRef = ref(storage, `blog/${files[i].name}`);
          reference.push(storageRef)
          await uploadBytes(storageRef, files[i]).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            setLoading(true)
          });
        }
    
        for (var i = 0; i < reference.length; i++) {
          await getDownloadURL(ref(storage, reference[i]))
            .then((url) => {
              urlsPush.push(url)
            })
            .catch((error) => {
    
            });
    
        }
        setLoading(false)
        console.log(urlsPush)
        setUrls(urlsPush)
    }


    const AddBlog = async (e) =>{
        e.preventDefault()
        const docRef = await addDoc(collection(db, "blogs"), {
            title: title,
            Description: desc,
            images:urls
          });
          console.log("Document written with ID: ", docRef.id);
    }



    return (
        <>
        {
            loading && <LoadingModal />
        }
        <Box className="container mx-auto p-4 w-full">
            <Text as="h1" className="text-2xl font-bold mb-4 ">Add New Blog</Text>
            <form className="max-w-full" onSubmit={AddBlog}>
                <FormControl className="mb-4">
                    <FormLabel className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title:</FormLabel>
                    <Input onChange={(e)=>setTitle(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter blog title" />
                </FormControl>
                <FormControl className="mb-4">
                    <FormLabel className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description:</FormLabel>
                    <Textarea onChange={(e)=>setDesc(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Enter blog description" defaultValue={""} />
                </FormControl>
                <FormControl className="mb-4">
                    <FormLabel className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">Images:</FormLabel>
                    <Input onChange={PhotoSave} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="images" type="file" multiple />
                </FormControl>
                <Box className="flex items-center justify-center">
                    <Button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add Blog
                    </Button>
                </Box>
            </form>
        </Box>
        </>

    )
}
