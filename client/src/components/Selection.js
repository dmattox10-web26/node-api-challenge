import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Jumbotron } from 'reactstrap'
import { useParams } from 'react-router-dom'

const Selection = props => {
    
    const { id } = useParams()
    const [project, updateProject] = useState({
        name: '',
        description: '',
        actions: []
    })

    useEffect(() => {
        axios.get(`/api/projects/${id}`)
        .then(res => {
            updateProject(res.data)
        })
    }, [])
    return (
        <Container>
            <div className='spacer'></div>
            <Jumbotron>
                <h1>{ project.name }</h1>
                <h2>{ project.description }</h2>
                <ul>
                {
                    project.actions.map(action => 
                        <li key={ Date.now() }>
                            <div>
                                <h3>{ action.description }</h3>
                                <h4>{ action.notes }</h4>
                            </div>
                        </li> 
                    )
                }
                </ul>
            </Jumbotron>
        </Container>
    )
}

export default Selection