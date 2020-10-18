import React, {Component} from "react"
import * as bs from "react-bootstrap";
import "../../css/array/arrayGeneration.css";

class ArrayGeneration extends React.Component{
    constructor(){
        super();
        this.state = {

            testCase :"[]"
            
        };
    }

    generateTestCase = () =>{
        this.props.generateTestCase();
    }

    render(){
        return(
            <bs.Container className = "justify-content-center" id = "arrayGenerationContainer">
                <bs.Button onClick = {this.generateTestCase}>Generate</bs.Button>
                <br></br>
                <bs.FormLabel id = "arrayGenerationLabel">{this.state.testCase}</bs.FormLabel>
            </bs.Container>
        )
    }
}

export default ArrayGeneration;