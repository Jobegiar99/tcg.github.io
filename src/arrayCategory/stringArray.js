import React, {Component} from "react";
import CharStringOption from "./charStringOption";

class StringArray extends React.Component{
    callInputChange = (evt) =>{
        this.props.handleInputChange(evt);
    }
    render(){
        return(
            <div>
                
                <label>string length 1 to 1000 </label>
                    <input 
                        name = 'strLength'
                        type = "number"
                        min = '0'
                        max = '1000'
                        onChange = {this.callInputChange}
                    />


                <CharStringOption 
                        handleLower = {this.props.handleLower}
                        handleUpper = {this.props.handleUpper}
                        handleSpecial = {this.props.handleSpecial}
                />
            </div>
        )
    }
}

export default StringArray;