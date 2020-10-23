import React, { useEffect } from 'react';
import {Jumbotron,Container,Button} from 'reactstrap';

function Home(){
    useEffect(()=>{
        document.title="Home";
    },[])
    return(
        <div>
            <Jumbotron className="text-center bg-info-light">
                <h1>All Courses are Here</h1>
                <p>Get here all courses where you can developed your knowledge across all formats.</p>
                <Container>
                    <Button color="danger" outline>Start Courses</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home;