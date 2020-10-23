import React, { Fragment } from 'react';
import { Form,FormGroup, Label, Input, Button ,Container} from 'reactstrap';

function UpdateCourse({update,props}){
        console.log(props.location.c);
    return(
        <Fragment>
            <h1 className="text-center my-3">Update Coureses Here</h1>
            <Form>
                <FormGroup>
                    <Label for="courseId">Course Id</Label>
                    <Input type="text" name="courseId" id="courseId" value={update.id} placeholder="Enter Course Id here"/>
                </FormGroup>
                <FormGroup>
                    <Label for="courseTitle">Course Title</Label>
                    <Input type="text" name="courseTitle" id="courseTitle" value={update.title} placeholder="Enter Course Title here"/>
                </FormGroup>
                <FormGroup>
                    <Label for="courseDescription">Course Description</Label>
                    <Input type="textarea" name="courseDescription" id="courseDescription" value={update.description} placeholder="Enter Course Description here"/>
                </FormGroup>
                <Container className="text-center">
                    <Button color="primary">Update Course</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default UpdateCourse;