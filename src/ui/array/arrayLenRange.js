import React, {Component} from "react"
import * as bs from "react-bootstrap";
import ArrayDataType from "./arrayDataType.js";
import "../../css/array/arrayLenRange.css";

class ArrayLenRange extends React.Component{

    handleChange = (evt) =>{
        this.props.handleChange(evt);
    }

    render(){
        let isDecimal = 
            <bs.Col xs = {12} className = "justify-content-center">
                <bs.FormLabel className = "arrayFormLabel">Decimals</bs.FormLabel>
                <bs.FormControl onChange = {this.handleChange} className = "arrayLenRangeFormControl" name = "arrDecimals"  min = "1" type = "number" placeholder = "Range: 1-20"/>
            </bs.Col>
        let isNumber = 
            <bs.Row className = "justify-content-center">
                <bs.Col xs = {12} className = "justify-content-center">
                    <bs.FormLabel className = "arrayFormLabel">Min value</bs.FormLabel>
                    <bs.FormControl onChange = {this.handleChange} className = "arrayLenRangeFormControl" name = "arrMin"  min = "1" type = "number" placeholder = "Range: -1000000 to 1000000"/>
                </bs.Col>
                <bs.Col xs = {12} className = "justify-content-center">
                    <bs.FormLabel className = "arrayFormLabel">Max Value</bs.FormLabel>
                    <bs.FormControl  onChange = {this.handleChange} className = "arrayLenRangeFormControl" name = "arrMax"  min = "1" type = "number" placeholder = "Range: -1000000 to 1000000"/>
                </bs.Col>
                {(this.props.isDecimal) ? isDecimal : null}
                </bs.Row>;

        let isString =
            <bs.Col xs = {12}>
                <bs.FormLabel className = "arrayFormLabel">Length of strings</bs.FormLabel>
                <bs.FormControl className = "arrayLenRangeFormControl" name = "arrayStringLength" onChange = {this.handleChange} placeholder="1-1000000" />
            </bs.Col>

        let isCharString =
            <bs.Row>

                {(this.props.isString)  ? isString : null}

                <bs.Col xs = {3}>
                    <bs.FormLabel className = "arrayFormLabel">Numbers</bs.FormLabel>
                    <bs.FormCheck className = "arrayLenRangeFormControl" onChange = {this.handleChange} name = "arrIncludeNumbers" />
                </bs.Col> 
                <bs.Col xs = {3}>
                    <bs.FormLabel className = "arrayFormLabel">Lower Case</bs.FormLabel>
                    <bs.FormCheck className = "arrayLenRangeFormControl" onChange = {this.handleChange} name = "arrIncludeLower" />
                </bs.Col>
                <bs.Col xs = {3}>
                    <bs.FormLabel  className = "arrayFormLabel">Upper Case </bs.FormLabel>
                    <bs.FormCheck className = "arrayLenRangeFormControl" onChange = {this.handleChange} name = "arrIncludeUpper"/>
                </bs.Col>
                <bs.Col xs = {3}>
                    <bs.FormLabel  className = "arrayFormLabel">Special Characters</bs.FormLabel>
                    <bs.FormCheck className = "arrayLenRangeFormControl" onChange = {this.handleChange} name = "arrIncludeSpecial"/>
                </bs.Col>
            </bs.Row>;
        
        
        return(
            <bs.Container className = "justify-content-center" id = "arrLenRangeContainer">
                <bs.Row className = "justify-content-center arrayFormLabel">
                    <bs.Col xs = {12}>
                        <bs.FormLabel className = "arrayFormLabel">Length of the array</bs.FormLabel>
                        <bs.FormControl onChange = {this.handleChange} className = "arrayLenRangeFormControl" name = "arrLen"  min = "1" type = "number" placeholder = "Range: 1 to 1000000"/>
                    </bs.Col>
                    {(this.props.isNumber) ? isNumber : (this.props.isCharString) ? isCharString : null}
                    
                </bs.Row>
            </bs.Container>
        )
    }
}

export default ArrayLenRange;