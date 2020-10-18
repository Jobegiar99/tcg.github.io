import React, {Component} from "react"
import * as bs from "react-bootstrap";
import "../../css/array/arrayDataType.css";

class ArrayDataType extends React.Component{
    handleButtonClick = (evt) =>{
        evt.preventDefault();
        this.props.handleDataType(evt.target.name);
    }
    render(){
        return(
            <bs.Container className = "justify-content-center" id = "arrayDataTypeContainer" >
                <h4 id = "arrayDataTypeTitle">Select a Data Type</h4>
                
                <bs.Row className ="justify-content-center">
                
                    <bs.Row>
                        <bs.Navbar>
                            <bs.Container className = "justify-content-center" id = "arrayDataTypeButtons">
                
                                <bs.Row className = "arrayRow" >
                                    <bs.Col 
                                        xs = {2.4}
                                        className = "arrayCol"
                                    >
                                        <bs.Button onClick = {this.handleButtonClick} name = "char" className = "arrayButton">
                                            Char  
                                        </bs.Button>                           
                                    </bs.Col>
                                    <bs.Col 
                                        xs = {2.4}
                                        className = "arrayCol"
                                    >
                                        <bs.Button onClick = {this.handleButtonClick} name = "string" className = "arrayButton">
                                            string
                                        </bs.Button>                           
                                    </bs.Col>
                                    <bs.Col 
                                        xs = {2.4}
                                        className = "arrayCol"
                                    >
                                        <bs.Button onClick = {this.handleButtonClick} name = "int" className = "arrayButton">
                                            int   
                                        </bs.Button>                           
                                    </bs.Col>
                                    <bs.Col 
                                        xs = {2.4}
                                        className = "arrayCol"
                                    >
                                        <bs.Button onClick = {this.handleButtonClick} name = "double" className = "arrayButton">
                                            double
                                        </bs.Button>                           
                                    </bs.Col>
                                    <bs.Col 
                                        xs = {2.4}
                                        className = "arrayCol"
                                    >
                                        <bs.Button onClick = {this.handleButtonClick} name = "bool" className = "arrayButton">
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

export default ArrayDataType;