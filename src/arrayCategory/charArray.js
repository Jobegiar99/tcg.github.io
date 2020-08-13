import React, {Component} from "react";
import CharStringOption from "./charStringOption";

class CharArray extends React.Component{
    render(){
        return(
            <div>
                <label> Numbers? </label>
                    <input 
                        type = 'checkbox' 
                        onChange = {this.props.handleNum}
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

export default CharArray;