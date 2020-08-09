import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Category from "./category";
import ArrayCategory from "./arrayCategory";
import StringCategory from "./stringCategory";
import {arrayGeneration} from "./testCaseGenerator";
import "./index.css";
class App extends React.Component{

    constructor(){
        super();

        this.state = {
            currentCategory : <ArrayCategory
                generate = {this.generateTestCase}
            />,
            testcase : ""
        };
    }

    generateTestCase = (dataType, arraySize, minIn, maxIn,sorted, repeated, decimals, lower, upper, numbers,special, strLength) => {
        
        let temp = arrayGeneration(
            dataType,
            arraySize,
            minIn,
            maxIn,
            sorted, 
            repeated,
            decimals,
            lower,
            upper,
            numbers,
            special,
            strLength
        );

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

    copyToClipboard = () =>{
        //code taken from https://www.arclab.com/en/kb/htmlcss/how-to-copy-text-from-html-element-to-clipboard.html

        var r = document.createRange();
        r.selectNode(document.getElementById('testCase'));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();

        //
        alert('Test case has been copied to clipboard :).');
    }

    render(){
        return(
            <div align = "center">
                This app is under development. Expect more features soon :)
                <Category
                    handleChange = {this.handleChange}
                />  
                {this.state.currentCategory}
                <br></br>
                <button onClick = {this.copyToClipboard}> Copy </button>
                <br></br>
                <br></br>
                <p id = "testCase">
                    [{this.state.testcase}]
                </p>
                <br></br>
                
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));