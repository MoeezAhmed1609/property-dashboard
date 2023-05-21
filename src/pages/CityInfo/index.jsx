import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DefaultLayout from "../../layout/DefaultLayout"
import { Button } from '@chakra-ui/react';
import "./index.css"
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Config';

export default function CityInfo() {
  const [value, setValue] = useState();

  useEffect(()=>{
    console.log(value)
  },[])
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];


  const HandleSubmit = async () =>{
    console.log(value)
    const docRef = await addDoc(collection(db, "SetupBuisness"), {
      value
    });
    console.log("Document written with ID: ", docRef.id);
    
  }




  return (
    <DefaultLayout>
      <div className="w-full h-[500px] bg-[#fff] border-none Editor">
        <ReactQuill modules={modules} formats={formats}  className="w-full h-[430px] bg-white border-none" theme="snow" value={value} onChange={(e)=>setValue(e)} />
      </div>
      <button onClick={HandleSubmit} className='py-3 px-10 bg-cyan-500 my-1'>Submit</button>
    </DefaultLayout>
  )
}
