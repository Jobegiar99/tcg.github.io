import React, {Component} from "react";

class SortRepeatArray extends React.Component{
    callSortChange = (evt) =>{
        this.props.handleSortChange(evt);
    }

    callRepeatedChange = (evt) =>{
        this.props.handleRepeatedChange(evt);
    }

    render(){
        return(
            <div>
                <label>
                    <h4>
                        Sort the array? Allow repeated values?
                    </h4>
                        Sort?
                    </label>
        
                    <input type = "checkbox" onClick =  {this.callSortChange} />
                    <labe> Allow repeated values?</labe>
                    <input type = "checkbox" onClick =  {this.callRepeatedChange} />
            </div>
        )
    }
}

export default SortRepeatArray;