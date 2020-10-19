import React, {Component} from "react"
import * as bs from "react-bootstrap";
import arrayGeneration from "./arrayTestCaseGenerator";
import "../../css/array/arrayGeneration.css";

class ArrayGeneration extends React.Component{
    constructor(){
        super();
        this.state = {

            testCase :""
            
        };
    }

    generateTestCase = () =>{
        let temp = arrayGeneration(
                this.props.dataType, 
                this.props.arrLen, 
                this.props.arrMin, 
                this.props.arrMax, 
                this.props.arrSort, 
                this.props.arrRepeated,
                this.props.arrDecimals,
                this.props.arrIncludeLower,
                this.props.arrIncludeUpper,
                this.props.arrIncludeNumbers,
                this.props.arrIncludeSpecial, 
                this.props.arrayStringLength);
        this.setState({testCase: temp});
    }

    copyTestCase = () =>{
        const el = this.textArea;
        el.select();
        document.execCommand("copy")
        alert('Copied to clipboard :)');
    }

    render(){
        return(
            <bs.Container className = "justify-content-center" id = "arrayGenerationContainer">
                <bs.Row className = "justify-content-center">
                    <bs.Button onClick = {this.generateTestCase} className = "arrayGenerationButton">Generate</bs.Button>
                </bs.Row>
                <bs.Row className = "justify-content-center">
                    <textArea className = "justify-content-center"id = "arrayGenerationLabel"
                        ref={(textarea) => this.textArea = textarea}
                    >
                        [{this.state.testCase}]
                    </textArea>
                </bs.Row>
                <bs.Row className = "justify-content-center">
                    <bs.Button onClick = {this.copyTestCase} className = "arrayGenerationButton">Copy</bs.Button>
                </bs.Row>
            </bs.Container>
        )
    }
}

export default ArrayGeneration;