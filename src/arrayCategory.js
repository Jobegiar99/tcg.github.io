import React, {Component} from "react";

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
            decimalVisible : { visibility : 'hidden'},
            charStringVisible : {visibility :'hidden'},
            sortRepeated : {visibility : 'visible'},
            generateNumbers : {visibility : 'hidden'}
        };
    }

    handleDataTypeChange = (evt) => {

        this.setState({ dataType: evt.target.value});

        if(evt.target.value == 'int'){
            this.setState({
                decimalVisible : {visibility : 'hidden'}, 
                charStringVisible : {visibility: 'hidden'},
                sortRepeated : {visibility : 'visible'},
                generateNumbers : {visibility : 'hidden'}
            });
        }else if ( evt.target.value == 'float'){
            this.setState({
                decimalVisible : {visibility : 'visible'}, 
                charStringVisible : {visibility: 'hidden'},
                sortRepeated : {visibility : 'visible'},
                generateNumbers : {visibility : 'hidden'}
            });
        }else if ( (evt.target.value == 'char') || (evt.target.value == 'string') ){
            this.setState({
                decimalVisible : {visibility : 'hidden'}, 
                charStringVisible : {visibility: 'visible'},
                sortRepeated : {visibility : 'hidden'},
                generateNumbers : {visibility : (evt.target.value == 'char') ? 'visible' : 'hidden'}
                
            });
        }else{
            this.setState({
                decimalVisible : {visibility : 'hidden'}, 
                charStringVisible : {visibility: 'hidden'},
                sortRepeated : {visibility : 'hidden'},
                generateNumbers : {visibility : 'hidden'}
            });
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
                    <div style = {this.state.sortRepeated}>
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
                    </div>
                    <div style = {this.state.decimalVisible}>
                        <label> 
                            <h4>
                                Amount of decimals (from 1 to 10)
                            </h4>
                        </label>
                        <input
                            name = "decimals"
                            min = "1"
                            max = "10"
                            onChange = {this.handleInputChange}
                        />
                    </div>
                    <div style = {this.state.sortRepeated}>
                        <label>
                            <h4>
                                Sort the array? Allow repeated values?
                            </h4>
                            Sort?
                        </label>
        
                        <input type = "checkbox" onClick =  {this.handleSortChange} />
                        <labe> Allow repeated values?</labe>
                        <input type = "checkbox" onClick =  {this.handleRepeatedChange} />
                    </div>
                    <div style = {this.state.charStringVisible}>
                        <label>
                            <h4>
                                string and char options
                            </h4>
                            Lower Case?
                        </label>
                        <input type = 'checkbox' onChange = {this.handleLower}/>

                        <label> Upper Case?</label>
                        <input type = 'checkbox' onChange = {this.handleUpper}/>

                        <div style = {this.state.generateNumbers}>
                            <label> Numbers? </label>
                            <input type = 'checkbox' onChange = {this.handleNum}/>
                        </div>

                        <label> Special Characters? </label>
                        <input type = 'checkbox' onChange = {this.handleSpecial}/>
                        <br></br>
                        <br></br> 
                        <label>string length 1 to 1000 </label>
                        <input 
                            name = 'strLength'
                            type = "number"
                            min = '1'
                            max = '1000'
                            onChange = {this.handleInputChange}
                        />
                    </div>

                    <br></br>
                    <button id = 'buttonGenerate' onClick = {this.callArrayGenerator}>Generate Random Test Case</button>
                    
                </form>
                
            </div>
        )
    }
}

export default ArrayCategory;