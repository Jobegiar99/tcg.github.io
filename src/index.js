import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Category from "./category";
import ArrayCategory from "./arrayCategory";
import StringCategory from "./stringCategory";
import {generateNumArray} from "./testCaseGenerator";
import "./index.css";
class App extends React.Component{

    constructor(){
        super();

        this.state = {
            currentCategory : <ArrayCategory
                generate = {this.arrayGenerator}
            />,
            testcase : ""
        };
    }

    arrayGenerator = (dataType, arraySize, minIn, maxIn, includeNull,sorted, repeated) => {
        
        let temp = generateNumArray(arraySize,minIn,maxIn,includeNull,sorted, repeated);

        this.setState({testcase : temp});
        
    }

    handleChange = (evt) =>{
        let temp = null;
        switch(evt.target.value){
            case 'array':
                temp = <ArrayCategory
                    generate = {this.arrayGenerator}
                />;
            break;
            case 'string':
                temp = <StringCategory/>
            break;
        }
        this.setState({currentCategory: temp});
    }



    render(){
        return(
            <div align = "center">
                <Category
                    handleChange = {this.handleChange}
                />  
                {this.state.currentCategory}
                <br></br>
                <p id = "testCase">
                    [{this.state.testcase}]
                </p>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));