import React, {Component} from "react";

class Category extends React.Component{

    handleSelect = (evt) =>{
        this.props.handleChange(evt);
    }

    render(){
        return(
            <div id = "categoryDiv" align = "center">
                <form>
                    <label > 
                        <h4>
                            Select the type of input that you would like to generate
                        </h4>
                    </label> 
                    <select id = "inputOptions" onChange = {this.handleSelect}>
                        <option value = "array" >  Array  </option>
                        <option value = "string">  String </option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Category;