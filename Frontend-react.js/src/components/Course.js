import React from 'react';
import {Card,CardBody,CardTitle,CardSubTitle,CardText,CardFooter,Container,Button} from 'reactstrap';
import Axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Course=({course , remove})=>{

    

    const deleteCourse=(id)=>{
        Axios.delete(`${base_url}/Courses/${id}`).then(
            (response)=>{
                toast.success("Course Deleted")
                remove(id);
            },(error)=>{
                toast.error("Course not Deleted")
            }
        )
    }

    return(
        <Card className="text-center">
            <CardBody>
                <CardTitle>{course.title}</CardTitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Link to={{pathname:"/view-courses/update",c:{course}}} ><Button color="primary">UPDATE</Button></Link>
                    <Button color="danger ml-3" onClick={()=>{
                        deleteCourse(course.id);
                    }} >DELETE</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;