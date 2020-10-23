import React, { useState, useEffect } from 'react';
import Course from './Course';
import base_url from './../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';


function AllCourses(){
    useEffect(()=>{
        document.title="All Courses";
    },[])

    //function to call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/Courses`).then(
            (response)=>{
                console.log(response.data);
                toast.success("Server Connected");
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("Server error");
            }
        )
    }

    //calling server
    useEffect(()=>{
        getAllCoursesFromServer();
    },[])

    const [courses,setCourses] = useState([
       
    ])

    const removeCourse=(id)=>{
        setCourses(courses.filter((c)=> c.id !== id))
    }

    return(
        <div>
            <h1>All Coures</h1>
        {
            courses.length>0?courses.map((item)=><Course key={item.id} course={item} remove={removeCourse}/>) : "No Courses Found"
        }
        </div>
    )
}

export default AllCourses;