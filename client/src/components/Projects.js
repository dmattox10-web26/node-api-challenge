import React, { useState, useEffect } from 'react'
import { Container, Jumbotron } from 'reactstrap'
import axios from 'axios'

import Project from './Project'

const Projects = props => {

    const [projects, updateProjects] = useState([])

    useEffect(() => {
        axios.get('/api/projects')
        .then(res => {
            updateProjects(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className="spacer"></div>
            <Container>
                <Jumbotron>
                    {
                        projects.map(project => <div key={ Date.now() }><Project project={ project } /><div className='spacer'></div></div>)
                    }
                </Jumbotron>
            </Container>
        </div>
    )
}

export default Projects