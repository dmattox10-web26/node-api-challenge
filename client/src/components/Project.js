import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardText } from 'reactstrap'

const Project = props => {
    const { name, id } = props.project
    return (
        <Card>
            <CardBody>
                <CardText>
                    <Link to={`/${id}`}>{ name }</Link>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default Project