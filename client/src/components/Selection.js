import React, { useState, useEffect } from 'react'
import axios from 'axios'
import cuid from 'cuid'
import { Container, Jumbotron, Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import { useParams, useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Selection = props => {
    
    const { id } = useParams()
    let history = useHistory()
    const [project, updateProject] = useState({
        name: '',
        description: '',
        actions: []
    })
    const [modal, setModal] = useState(false)
    const [values, updateValues] = useState({})

    const toggle = () => setModal(!modal)


    useEffect(() => {
        axios.get(`/api/projects/${id}`)
        .then(res => {
            updateProject(res.data)
        })
    }, [])

    const deleteProject = id => {
        axios.delete(`/api/projects/${id}`)
        .then( res => {
            history.push('/')
        })
    }

    const formik = useFormik({
        initialValues: {
            description: '',
            notes: ''
        },
        validationSchema: Yup.object({
           description: Yup.string()
           .required('Required')
           .max(128),
           notes: Yup.string()
           .required('Required'),
        }),
        onSubmit: values => {
            values.project_id = id
            axios.post(`/api/actions`, values)
            .then(res => {
                toggle()
                history.push(`/`)
            })
        },
    })

    return (
        <Container>
            <div className='spacer'></div>
            <Jumbotron>
                <h1>{ project.name }</h1>
                <h2>{ project.description }</h2>
                <ul>
                {
                    project.actions.map(action => 
                        <li key={ cuid() }>
                            <div>
                                <h3>{ action.description }</h3>
                                <h4>{ action.notes }</h4>
                            </div>
                        </li> 
                    )
                }
                </ul>
                <Row>
                    <Col xs='6'>
                        <Button style={{width: '100%'}} onClick={ toggle } color='primary'>Add Action</Button>
                    </Col>
                    <Col xs='6'>
                        <Button style={{width: '100%'}} onClick={() => deleteProject(id)} color='danger'>Delete Project</Button>
                    </Col>
                </Row>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={formik.handleSubmit}>
                            <Row>
                                <Col xs='12'>
                                    <FormGroup>
                                        <Label for='description'>Description</Label>
                                        <Input
                                            id='description'
                                            name='description'
                                            type='text'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.description}
                                            className={formik.touched.description && !formik.errors.description ? 'form-control is-valid' : 'form-control is-invalid'}
                                        />
                                        {formik.touched.description && formik.errors.description ? <div className='invalid-feedback'>{formik.errors.description}</div> : null}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs='12'>
                                    <FormGroup>
                                        <Label for='notes'>Notes</Label>
                                        <Input
                                            id='notes'
                                            name='notes'
                                            type='text'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.notes}
                                            className={formik.touched.notes && !formik.errors.notes ? 'form-control is-valid' : 'form-control is-invalid'}
                                        />
                                        {formik.touched.notes && formik.errors.notes ? <div className='invalid-feedback'>{formik.errors.notes}</div> : null}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs='6'>
                                    <Button color="primary" type='submit' style={{width: '100%'}}>Update</Button>{' '}
                                </Col>
                                <Col xs='6'>
                                    <Button color="primary" onClick={toggle} style={{width: '100%'}}>Cancel</Button>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                </Modal>
            </Jumbotron>
        </Container>
    )
}

export default Selection