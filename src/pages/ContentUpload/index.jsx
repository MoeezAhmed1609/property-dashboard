import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Dropzone from 'react-dropzone';
import { db, storage } from "../../Config"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Button } from '@chakra-ui/react';
import { addDoc, collection } from 'firebase/firestore';

export default function ContentUpload() {
  const [value, setValue] = useState('');
  const [page,setPage] = useState();
  const [key,setKey] = useState();
  const [link,setLink] = useState();

  const handleImageUpload = (imageUrl) => {
    console.log(imageUrl)
    const quill = quillRef.current.getEditor();
    const range = quill.getSelection(true);

    quill.insertEmbed(range.index, 'image', {
      src: imageUrl,
      alt: 'Image',
    });
    setValue(value + `<img src='${imageUrl}' />`)
  };

  useEffect(() => {
    console.log(value)
  }, [])


  const quillRef = React.useRef();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const HandleUploadToFirestore = async () =>{
    const docRef = await addDoc(collection(db, "Contents"), {
      value,
      page,
      key,
      link
    });
    console.log("Document written with ID: ", docRef.id);
  }



  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
  ];
  return (
    <DefaultLayout>
      <div className="">
        <div className="flex w-full py-2 gap-2 lg:flex-row md:flex-col sm:flex-col">
          <ImageDropzone handleImageUpload={handleImageUpload} />
          <input onChange={(e)=> setPage(e.target.value)} className='border border-white rounded-md py-2 px-2'  placeholder='Enter Page Number: '/>
          <input onChange={(e)=> setKey(e.target.value)} className='border border-white rounded-md py-2 px-2' placeholder='Enter Key Name: '/>
          <input onChange={(e)=> setLink(e.target.value)} className='border border-white rounded-md py-2 px-2' placeholder='Enter Link: '/>
          <Button onClick={HandleUploadToFirestore} className='border border-white rounded-md'>Add Data</Button>

        </div>

        <ReactQuill

          ref={(el) => {
            quillRef.current = el;
          }}
          formats={formats} modules={modules} theme="snow" style={{ height: 500, backgroundColor: '#fff' }} value={value} onChange={setValue} />

      </div>
    </DefaultLayout>
  )
}


const ImageDropzone = ({ handleImageUpload }) => {
  const handleDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    console.log(file)

    const storageRef = ref(storage, `content/${file.name}`);
    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
    await getDownloadURL(ref(storage, storageRef))
      .then((url) => {
        console.log(url)
        handleImageUpload(url)

      })
      .catch((error) => {
        // Handle any errors
      });


  };

  return (
    <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} className='cursor-pointer' />
          <p>Upload or Drag File</p>
        </div>
      )}
    </Dropzone>
  );
};