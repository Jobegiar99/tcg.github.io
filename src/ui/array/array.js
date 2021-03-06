import React, {Component} from "react"
import * as bs from "react-bootstrap";
import ArrayDataType from "./arrayDataType.js";
import ArrayLenRange from "./arrayLenRange.js";
import ArrInput from "./arrInput.js"
import ArrayExtras from "./arrayExtras.js";
import ArrayGeneration from "./arrayGeneration";
import "../../css/array/array.css";

class Array extends React.Component{
    constructor(){
        super();
        this.state = {
            dataType : "int",
            arrLen : 1,
            arrMin : -1000000,
            arrMax :  1000000,
            arrDecimals:1,
            arrIncludeNumbers: false,
            arrIncludeLower: false,
            arrIncludeUpper: false,
            arrIncludeSpecial: false,
            arrSort: false,
            arrRepeated: false,
            arrayStringLength : 1,
        };
    }
    componentDidMount(){
        this.setState({dataType: "int"});
    }

    handleDataType = (daTy) =>{
        this.setState({dataType: daTy});
    }

    handleChange = (changed) =>{
        if(changed.target.name === 'arrIncludeNumbers'){
            this.setState({arrIncludeNumbers: !this.state.arrIncludeNumbers});
        }
        else if(changed.target.name === 'arrIncludeLower'){
            this.setState({arrIncludeLower: !this.state.arrIncludeLower});
        }
        else if(changed.target.name === 'arrIncludeUpper'){
            this.setState({arrIncludeUpper: !this.state.arrIncludeUpper});
        }
        else if(changed.target.name === 'arrIncludeSpecial'){
            this.setState({arrIncludeSpecial: !this.state.arrIncludeSpecial});

        }else if(changed.target.name === "arrLen" && parseInt(changed.target.value) >= 1){
            this.setState({[changed.target.name]: parseInt([changed.target.value])});

        }else if (changed.target.name == "arrayStringLength" && parseInt([changed.target.value])>= 1 && parseInt([changed.target.value]) <= 1000000){
            this.setState({[changed.target.name]: parseInt([changed.target.value])});

        }else if (changed.target.name === "arrMin" && changed.target.value >= -1000000 && changed.target.value <= this.state.arrMax && changed.target.value != ""){
            if(this.state.dataType == 'double')
                this.setState({[changed.target.name]: parseFloat([changed.target.value])});
            else
                this.setState({[changed.target.name]: parseInt([changed.target.value])});

        }else if (changed.target.name === "arrMax" && changed.target.value <= 1000000 && changed.target.value >= this.state.arrMin && changed.target.valuer != ""){
            if(this.state.dataType == 'double')
                this.setState({[changed.target.name]: parseFloat([changed.target.value])});
            else
                this.setState({[changed.target.name]: parseInt([changed.target.value])});

        }else if (changed.target.name === 'arrDecimals' && parseInt(changed.target.value) >= 1 && parseInt(changed.target.value) <= 20){
            this.setState({[changed.target.name]: parseInt([changed.target.value])})
        }else if (changed.target.name === 'arrSort'){
            this.setState({arrSort: !this.state.arrSort});
        }else if (changed.target.name === 'arrRepeated'){
            this.setState({arrRepeated: !this.state.arrRepeated});
        }
    }

    render(){
        return(
           <bs.Container className = "justify-content-center">
               <ArrayDataType
                    handleDataType = {this.handleDataType}
               />
               <ArrayLenRange
                    isNumber = {(this.state.dataType == "int" || this.state.dataType == "double")}
                    isCharString = {(this.state.dataType == "char" || this.state.dataType == "string")}
                    isBool = {(this.state.dataType == "bool")}
                    isString = {(this.state.dataType == 'string')}
                    isDecimal = {(this.state.dataType == "double")}
                    handleChange = {this.handleChange}
               />
               
               <ArrayExtras
                    isNum = {(this.state.dataType == 'int' || this.state.dataType == 'double')}
                    handleChange = {this.handleChange}
               />
               <ArrInput
                    dataType = {this.state.dataType}
                    arrLen = {this.state.arrLen}
                    arrMin = {this.state.arrMin}
                    arrMax = {this.state.arrMax}
                    arrDecimals = {this.state.arrDecimals}
                    arrIncludeLower = {this.state.arrIncludeLower}
                    arrIncludeUpper = {this.state.arrIncludeUpper}
                    arrIncludeSpecial = {this.state.arrIncludeSpecial}
                    arrIncludeNumbers = {this.state.arrIncludeNumbers}
                    arrSort = {this.state.arrSort}
                    arrRepeated = {this.state.arrRepeated}
                    arrayStringLength = {this.state.arrayStringLength}
               />
              <ArrayGeneration
                    dataType = {this.state.dataType}
                    arrLen = {this.state.arrLen}
                    arrMin = {this.state.arrMin}
                    arrMax = {this.state.arrMax}
                    arrDecimals = {this.state.arrDecimals}
                    arrIncludeLower = {this.state.arrIncludeLower}
                    arrIncludeUpper = {this.state.arrIncludeUpper}
                    arrIncludeSpecial = {this.state.arrIncludeSpecial}
                    arrIncludeNumbers = {this.state.arrIncludeNumbers}
                    arrSort = {this.state.arrSort}
                    arrRepeated = {this.state.arrRepeated}
                    arrayStringLength = {this.state.arrayStringLength}
                    
              />
           </bs.Container>
        )
    }
}

export default Array;