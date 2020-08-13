import React,{Component} from "react";
import SortRepeatArray from "./sortRepeatArray";

class FloatArray extends React.Component{
    callInputChange = (evt) =>{
        this.props.handleInputChange(evt);
    }
    render(){
        return(
            <div>
                <h4>Type the range of numbers from -1000000000 to 1000000000
                    <br></br>
                        If range is way too small for the size of the array and no repeated values are allowed,
                        the range will increase automatically
                </h4>  
                <label for = "minInput"> Min </label>
                    <input 
                        name = 'minIn' 
                        min = '-1000000000'
                        max =  '1000000000'
                        id =  "minInput" 
                        step = 'any'
                        onChange = {this.callInputChange}
                        type = "number"
                    /> 

                <label for = "maxInput"> Max </label>
                    <input 
                        name = 'maxIn'
                        min = '-1000000000'
                        max =  '1000000000' 
                        id = 'maxInput'  
                        step = 'any'
                        onChange = {this.callInputChange} 
                        type = "number"
                    /> 
                <label> 
                    <h4>
                        Amount of decimals (from 1 to 10)
                    </h4>
                </label>
                    <input
                        name = "decimals"
                        min = "1"
                        max = "10"
                        onChange = {this.callInputChange}
                    />
                <SortRepeatArray
                    handleSortChange = {this.props.handleSortChange}
                    handleRepeatedChange = {this.props.handleRepeatedChange}
                />

            </div>
        )
    }
}

export default FloatArray;