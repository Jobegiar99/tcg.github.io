import React, {Component} from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import MainView from "./ui/mainView.js";
class App extends React.Component{


    render(){
        return(
            <div align = "center">

                <MainView></MainView>
                
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));