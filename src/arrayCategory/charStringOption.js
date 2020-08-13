import React, {Component} from "react";

class CharStringOption extends React.Component{
    callLower = (evt) =>{
        this.props.handleLower(evt);
    }
    callUpper = (evt) =>{
        this.props.handleUpper(evt);
    }
    callSpecial = (evt) =>{
        this.props.handleSpecial(evt);
    }
    render(){
  
        return(
            <div>
                <label>Lower Case?</label>
                    <input 
                        type = 'checkbox' 
                        onChange = {this.callLower}
                    />

                <label> Upper Case?</label>
                    <input 
                        type = 'checkbox' 
                        onChange = {this.callUpper}
                    />

                <label> Special Characters? </label>
                    <input 
                        type = 'checkbox' 
                        onChange = {this.callSpecial}
                    />
            </div>
        )
    }
}

export default CharStringOption;