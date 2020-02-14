import React, { useState, useEffect } from 'react'
import { Container, Jumbotron } from 'reactstrap'
import axios from 'axios'

const Projects = props => {

    const [projects, updateProjects] = useState([])

    useEffect(() => {
        axios.get('/api/projects')
        .then(projectsArray => {
            updateProjects(projectsArray)
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className="spacer"></div>
            <Container>
                <Jumbotron>

                </Jumbotron>
            </Container>
        </div>
    )
}

export default Projects