import React, {Component} from "react"
import * as bs from "react-bootstrap";
import "../../css/array/arrayExtras.css";

class ArrayExtras extends React.Component{

    handleChange = (evt) =>{
        this.props.handleChange(evt);
    }

    render(){
        let isNum = 
            <bs.Row className = "justify-content-center">
                <bs.Col xs = {4}>
                    <bs.FormLabel>Sort</bs.FormLabel>
                    <bs.FormCheck name = "arrSort" onChange = {this.handleChange} />
                </bs.Col>
                <bs.Col xs = {4}>
                    <bs.FormLabel>Allow repeated values</bs.FormLabel>
                    <bs.FormCheck name = "arrRepeated" onChange = {this.handleChange}/>
                </bs.Col>
                
            </bs.Row>;

        return(
            <bs.Container id = "arrayExtrasContainer" className = "justify-content-center">
                {(this.props.isNum) ? isNum : null}
                <bs.Row className = "justify-content-center">
                    
                </bs.Row>
            </bs.Container>
        )
    }
}

export default ArrayExtras;