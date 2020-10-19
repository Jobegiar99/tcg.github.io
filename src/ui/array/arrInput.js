import React, {Component} from "react"
import * as bs from "react-bootstrap";
import "../../css/array/arrInput.css";
class ArrInput extends React.Component{
    render(){
        let isString =
            <bs.Col xs = {3}>
                String length: {this.props.arrayStringLength}
            </bs.Col>;
        let isCharString = 
            <bs.Row className = "justify-content-center">
                <bs.Col xs = {3}>
                    Array Length: {this.props.arrLen}
                </bs.Col>
                {(this.props.dataType == 'string') ? isString : null}
                <bs.Col xs = {3}>
                    Include Number: {(this.props.arrIncludeNumbers) ? "Yes": "No"}
                </bs.Col>
                <bs.Col xs = {2}>
                    Include Lower : {(this.props.arrIncludeLower) ? "Yes": "No"}
                </bs.Col>
                <bs.Col xs = {2}>
                    Include Upper: {(this.props.arrIncludeUpper) ? "Yes": "No"}
                </bs.Col>
                <bs.Col xs = {2}>
                    Include Special: {(this.props.arrIncludeSpecial) ? "Yes": "No"}
                </bs.Col>
            </bs.Row>;
        
        let isDecimals = 
            <bs.Col xs = {3}>
                Decimals: {this.props.arrDecimals}
            </bs.Col>
        let isIntFloat =
            <bs.Row className = "justify-content-center">
                <bs.Col xs = {4}>
                    Array Length: {this.props.arrLen}
                </bs.Col>
                <bs.Col xs = {4}>
                    Min Value: {this.props.arrMin}
                </bs.Col>
                <bs.Col xs = {4}>
                    Max Value: {this.props.arrMax}
                </bs.Col>
                <bs.Col xs = {4}>
                    Array Sort: {(this.props.arrSort) ? "Yes" : "No"}
                </bs.Col>
                <bs.Col xs = {3}>
                    Allow Repeated: {(this.props.arrRepeated) ? "Yes" : "No"}
                </bs.Col>
                {(this.props.dataType == 'double') ? isDecimals : null}
            </bs.Row>;
        let isBool = 
            <bs.Row>
                <bs.Col xs = {12}>
                    Array Length: {this.props.arrLen}
                </bs.Col>
            </bs.Row>
        return(
            <bs.Container id = "arrInputContainer">
                {(this.props.dataType == "int" || this.props.dataType == "double") ? isIntFloat :
                 (this.props.dataType == "char" || this.props.dataType == "string") ? isCharString:
                 isBool}
            </bs.Container>
        )
    }
}
export default ArrInput;