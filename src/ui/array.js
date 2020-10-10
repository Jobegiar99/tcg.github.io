import React, {Component} from "react"
import * as bs from "react-bootstrap";
import "../css/mainView.css";

class Array extends React.Component{
    render(){
        return(
            <bs.Container id = "arrayContainer">
                <bs.Row>
                    <bs.Row>
                    <bs.ModalTitle>Select a Data Type</bs.ModalTitle>
                    </bs.Row>
                    <bs.Row>
                    <bs.Navbar>
                    <bs.Container className = "arrayContainer">
                        <bs.Row className = "arrayRow" >
                            <bs.Col 
                                xs = {2}
                                className = "arrayCol"
                            >
                                <bs.Button className = "arrayButton">
                                    Char
                                </bs.Button>                           
                            </bs.Col>
                            <bs.Col 
                                xs = {2}
                                className = "arrayCol"
                            >
                                <bs.Button className = "arrayButton">
                                    string
                                </bs.Button>                           
                            </bs.Col>
                            <bs.Col 
                                xs = {2}
                                className = "arrayCol"
                            >
                                <bs.Button className = "arrayButton">
                                    int
                                </bs.Button>                           
                            </bs.Col>
                            <bs.Col 
                                xs = {2}
                                className = "arrayCol"
                            >
                                <bs.Button className = "arrayButton">
                                    double
                                </bs.Button>                           
                            </bs.Col>
                            <bs.Col 
                                xs = {2}
                                className = "arrayCol"
                            >
                                <bs.Button className = "arrayButton">
                                    bool
                                </bs.Button>                           
                            </bs.Col>
                        </bs.Row>
                    </bs.Container>
                    </bs.Navbar>
                    </bs.Row>
                </bs.Row>
            </bs.Container>
        )
    }
}

export default Array;