'use client'

import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';

import { jua } from '../../../fonts'

export default function DeleteLab({lab, decoration}: any) {
    const { push } = useRouter();

    const handleDeleteLab = async (id:String) => {
        if (confirm('Are you sure you want to delete this lab?')) {
            await axios.delete(`http://localhost:5000/api/v1/labs/${id}`)
            .then(response => {
            console.log(`Lab with ID ${id} deleted successfully`);
            location.assign('/');
            })
            .catch(error => {
            console.error(`Failed to delete lab with ID ${id}: ${error.message}`);
            // Handle the error, such as displaying an error message
            })
          } else {
            // Do nothing!
          }   
      }


  return (
    <div onClick={() => handleDeleteLab(lab._id)} className={jua.className + decoration}>Delete</div>
  )
}
