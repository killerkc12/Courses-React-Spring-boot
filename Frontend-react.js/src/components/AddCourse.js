import React, { Fragment, useEffect, useState } from 'react';
import { Form,FormGroup, Label, Input, Button ,Container} from 'reactstrap';
import Axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

function AddCourse(){
    useEffect(()=>{
        document.title="Add Course";
    },[])

    const [course,setCourse] = useState({})

    const formHandle = (e)=>{

        postDataToServer(course)

        console.log(course);
        e.preventDefault();
    }

    const postDataToServer=(data)=>{
        Axios.post(`${base_url}/Courses`,data).then(
            (response)=>{
                console.log(response)
                console.log("success")
                toast.success("Course Added Successfully")
            },(error)=>{
                console.log(error)
                console.log("error")
                toast.success("Something went wrong")
            }
        )
    }

    return(
        <Fragment>
            <h1 className="text-center my-3">Add New Coureses</h1>
            <Form onSubmit={formHandle}>
                <FormGroup>
                    <Label for="courseTitle">Course Title</Label>
                    <Input type="text" name="courseTitle" id="courseTitle" placeholder="Enter Course Title here"
                    onChange={(e)=>{
                        setCourse({...course,title:e.target.value})
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="courseDescription">Course Description</Label>
                    <Input type="textarea" width="200" name="courseDescription" id="courseDescription" placeholder="Enter Course Description here"
                    onChange={(e)=>{
                        setCourse({...course,description:e.target.value})
                    }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="primary">Add Course</Button>
                    <Button type="reset" color="warning">Reset</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;