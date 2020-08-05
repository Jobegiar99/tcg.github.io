import React, {Component} from "react";

class ArrayCategory extends React.Component{
    constructor(){
        super();
        this.state = {
            dataType : "string",
            arraySize : 1,
            minIn : -1000000000,
            maxIn :  1000000000,
            includeNull : false,
            sort : false,
            repeated: false
        };
    }

    handleDataTypeChange = (evt) => {
        this.setState({ dataType: evt.target.value});
    }

    handleInputChange = (evt) =>{
        this.setState({[evt.target.name] : evt.target.value});
    }

    handleNullChange = () =>{
        this.setState({includeNull : !this.state.includeNull});
    }

    handleSortChange = () =>{
        this.setState({sort : !this.state.sort});
    }

    handleRepeatedChange = () =>{
        this.setState({repeated : !this.state.repeated});
    }

    callArrayGenerator = (evt) => {
        evt.preventDefault();
        this.props.generate(
            this.state.dataType,
            this.state.arraySize, 
            this.state.minIn,
            this.state.maxIn, 
            this.state.includeNull,
            this.state.sort,
            this.state.repeated);
    }

    render(){
        return(
            <div align = "center">
                <form>
                    <label for = "arrayDataType">
                        <h4>
                            Select the data type 
                        </h4>   
                    </label>
                    <select id = "arrayDataType" onChange ={this.handleDataTypeChange}>
                        <option value = "int"   > int   </option>
                        <option value = "double"> double</option>
                        <option value = "bool"  > bool  </option>
                        <option value = "char"  > char  </option>
                    </select>

                    <label for = "arraySize">
                        <h4>
                            Select the amount of values that this array will contain from 1 to 100000. 
                            If limit is <u>exceeded the length of the array will be set to 100000.</u>
                        </h4>
                    </label>
                    <input 
                        id = "arraySize"
                        name = "arraySize"
                        type ="number"   
                        min = '1'
                        onChange = {this.handleInputChange}
                    />

                    <h4>Type the range of numbers from -1000000000 to 1000000000</h4>                                               
                    <label for = "minInput"> Min </label>
                    <input 
                        name = 'minIn' 
                        min = '-1000000000'
                        max =  '1000000000'
                        id =  "minInput" 
                        onChange = {this.handleInputChange}
                        type = "number"
                    /> 

                    <label for = "maxInput"> Max </label>
                    <input 
                        name = 'maxIn'
                        min = '-1000000000'
                        max =  '1000000000' 
                        id = 'maxInput'  
                        onChange = {this.handleInputChange} 
                        type = "number"
                    /> 
                    <label>
                        <h4>
                            Include null values? Sort the array? Allow repeated values?
                        </h4>
                        Null?
                    </label>
                    <input type = "checkbox" onChange = {this.handleNullChange}/>
                    <label> Sort?</label>
                    <input type = "checkbox" onClick =  {this.handleSortChange} />
                    <labe> Allow repeated values?</labe>
                    <input type = "checkbox" onClick =  {this.handleRepeatedChange} />
                    <br></br>
                    <br></br>
                    <button id = 'buttonGenerate' onClick = {this.callArrayGenerator}>Generate Random Test Case</button>
                    
                </form>
            </div>
        )
    }
}

export default ArrayCategory;