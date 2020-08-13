import React, {Component} from "react";
import IntArray from "./arrayCategory/intArray";
import FloatArray from "./arrayCategory/floatArray";
import StringArray from "./arrayCategory/stringArray";
import CharArray from "./arrayCategory/charArray";

class ArrayCategory extends React.Component{
    constructor(){
        super();
        this.state = {
            dataType : "int",
            arraySize : 1,
            minIn : -1000000000,
            maxIn :  1000000000,
            sort : false,
            repeated: false,
            decimals : 1,
            lowerCase : false,
            upperCase : false,
            numbers : false,
            special : false,
            strLength : 1,
            currentView :<IntArray
                handleInputChange = {this.handleInputChange}
                handleSortChange = {this.handleSortChange}
                handleRepeatedChange = {this.handleRepeatedChange}
            />
        };
    }

    handleDataTypeChange = (evt) => {

        this.setState({ dataType: evt.target.value});
        switch(evt.target.value){
            case 'int':
                this.setState({currentView :<IntArray
                    handleInputChange = {this.handleInputChange}
                    handleSortChange = {this.handleSortChange}
                    handleRepeatedChange = {this.handleRepeatedChange}
                />, minIn : -1000000000,
                    maxIn :  1000000000,
                    sort : false,
                    repeated: false});
            break;
            case 'float':
                this.setState({currentView :<FloatArray
                    handleInputChange = {this.handleInputChange}
                    handleSortChange = {this.handleSortChange}
                    handleRepeatedChange = {this.handleRepeatedChange}
                />, minIn : -1000000000,
                    maxIn :  1000000000,
                    sort : false,
                    repeated: false,
                    decimals : 1});
            break;
            case 'bool':
                this.setState({currentView: null});
            break;
            case 'char':
                this.setState({currentView:<CharArray
                    handleNum = {this.handleNum}
                    handleLower = {this.handleLower}
                    handleUpper = {this.handleUpper}
                    handleSpecial = {this.handleSpecial}
                />, 
                lowerCase : false,
                upperCase : false,
                numbers : false,
                special : false});

            break;
            case 'string':
                this.setState({currentView:<StringArray
                    handleInputChange = {this.handleInputChange}
                    handleLower = {this.handleLower}
                    handleUpper = {this.handleUpper}
                    handleSpecial = {this.handleSpecial}
                />,
                lowerCase : false,
                upperCase : false,
                special : false,
                strLength : 1});
            break;
        }

    }

    handleInputChange = (evt) =>{
        this.setState({[evt.target.name] : evt.target.value});
    }

    handleSortChange = () =>{
        this.setState({sort : !this.state.sort});
    }

    handleRepeatedChange = () =>{
        this.setState({repeated : !this.state.repeated});
    }

    handleLower = () =>{
        this.setState({lowerCase : !this.state.lowerCase});
    }

    handleUpper = () => {
        this.setState({upperCase : !this.state.upperCase});
    }

    handleNum = () =>{
        this.setState({numbers : !this.state.numbers});
    }

    handleSpecial = () =>{
        this.setState({special : !this.state.special});
    }

    callArrayGenerator = (evt) => {
        evt.preventDefault();
        this.props.generate(
            this.state.dataType,
            this.state.arraySize, 
            this.state.minIn,
            this.state.maxIn, 
            this.state.sort,
            this.state.repeated,
            this.state.decimals,
            this.state.lowerCase,
            this.state.upperCase,
            this.state.numbers,
            this.state.special,
            this.state.strLength);
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
                        <option value = "float"> float</option>
                        <option value = "bool"  > bool  </option>
                        <option value = "char"  > char  </option>
                        <option value = "string"> string</option>
                    </select>

                    <label for = "arraySize">
                        <h4>
                            Select the amount of values that this array will contain from 1 to 10000. 
                            If limit is <u>exceeded the length of the array will be set to 10000.</u>
                        </h4>
                    </label>
                    <input 
                        id = "arraySize"
                        name = "arraySize"
                        type ="number"   
                        min = '1'
                        max = '10000'
                        onChange = {this.handleInputChange}
                    />
                    <br></br>
                    <br></br>
                    {this.state.currentView}

                    <button id = 'buttonGenerate' onClick = {this.callArrayGenerator}>Generate Random Test Case</button>
                    
                </form>
                
            </div>
        )
    }
}

export default ArrayCategory;