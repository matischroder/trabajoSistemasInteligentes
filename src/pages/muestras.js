import React from 'react';
import { Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import '../styles/muestra.css'
import refresh from '../images/refresh.png'
import data from "../data/response.json"

class Muestra extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            drop1: "Normal",
            drop2: "Covid",
            patology1: "normal",
            patology2: "COVID-19",
            transformation:"normal",
            data:data
        }
    }

    handleSelect1 = e => {
        let patology = e.toLowerCase()
        if (patology === "neumonía")
            patology = "pneumonia"
        else if (patology === "covid")
            patology = "COVID-19"
        this.setState({patology1:patology,drop1:e})
    }
    
    handleSelect2 = e => {
        let patology = e.toLowerCase()
        if (patology === "neumonía")
            patology = "pneumonia"
        else if (patology === "covid")
            patology = "COVID-19"
        this.setState({ patology2: patology,drop2:e })
    }

    getImage = (patology, transformation) => {
        for (let i = 0; i < data.length; i++){
            if (data[i].pathology === patology && data[i].transformation === transformation)
                return data[i].img
        }
        return null
    }

    handleTransformation = (e) => {
        this.setState({transformation:e.target.value    })
    } 

    render() {
        return(
        <>
            <div className="imagenes">
                <div className="content">
                    <DropdownButton className="dropdown" id="dropdown-item-button" variant="info" title={this.state.drop1} onSelect={this.handleSelect1}>
                            <Dropdown.Item as="button" eventKey="Normal">Normal</Dropdown.Item>
                            <Dropdown.Item as="button" eventKey="Covid">COVID-19</Dropdown.Item>
                            <Dropdown.Item as="button" eventKey="Neumonía">Neumonía</Dropdown.Item>
                    </DropdownButton>
                    <div className="img1">
                            <img src={"data:image/jpg;base64, " +  this.getImage(this.state.patology1,this.state.transformation) }
                                alt=""
                            ></img>
                    </div>
                </div>
                <div className="content">
                        <DropdownButton className="dropdown" id="dropdown-item-button" variant="info" title={this.state.drop2} onSelect={this.handleSelect2}>
                            <Dropdown.Item as="button" eventKey="Normal">Normal</Dropdown.Item>
                            <Dropdown.Item as="button" eventKey="Covid">COVID-19</Dropdown.Item>
                            <Dropdown.Item as="button" eventKey="Neumonía">Neumonía</Dropdown.Item>
                        </DropdownButton>
                    <div className="img2">
                            <img src={"data:image/jpg;base64, " + this.getImage(this.state.patology2, this.state.transformation)}
                                alt=""
                            ></img>
                    </div>
                </div>
            </div>
            <Form>
                <div className="select">
                        <Form.Check className="type" inline name="group1" type="radio" id={`inline-radio-1`} label="ORIGINAL" onClick={this.handleTransformation} value="normal" defaultChecked />
                        <Form.Check className="type" inline name="group1" type="radio" id={`inline-radio-2`} label="HEATMAP" onClick={this.handleTransformation} value="heatmap"/>
                        <Form.Check className="type" inline name="group1" type="radio" id={`inline-radio-3`} label="SEGMENTACIÓN" onClick={this.handleTransformation} value="segmentation"/>
                        <Form.Check className="type" inline name="group1" type="radio" id={`inline-radio-4`} label="BORDES" onClick={this.handleTransformation} value="borders"/>
                        <Button className="type" variant="link">
                            <img
                                src={refresh}
                                alt=""
                                width="30px"
                                height="30px"
                                >
                            </img>
                    </Button>
                </div>
            </Form>
        </>)
    }
}

export default Muestra