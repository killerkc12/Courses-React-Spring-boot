import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name}){
    return(
        <div>
            <Card className="my2 bg-secondary">
                <CardBody>
                <h1 className="text-center my-2">Welcome to Courses</h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;