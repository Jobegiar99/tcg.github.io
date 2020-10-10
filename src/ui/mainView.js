import React, {Component} from "react"
import * as bs from "react-bootstrap";
import "../css/mainView.css";
import String from "./string.js";
import Array from "./array.js";
import Matrix from "./matrix.js";
import Tree from "./tree.js";
import Graph from "./graph.js";
import Custom from "./custom.js";

class MainView extends React.Component{
    render(){
        return(
            <bs.Container className = "mainContainer">
                <bs.Navbar id = "mainNavbar">
                    <bs.Container className = "mainContainer">
                        <bs.Row className = "mainRow" >
                            <bs.Col 
                                xs = {2}
                                className = "mainCol"
                            >
                                <bs.Button className = "mainButton">String</bs.Button>
                            </bs.Col>
                            <bs.Col 
                                xs = {2}
                                className = "mainCol"
                            >
                                <bs.Button className = "mainButton">Array</bs.Button>
                            </bs.Col>
                            <bs.Col 
                                xs = {2}
                                className = "mainCol"
                            >
                                <bs.Button className = "mainButton">Matrix</bs.Button>
                            </bs.Col>
                            <bs.Col 
                                xs = {2}
                                className = "mainCol"
                            >
                                <bs.Button className = "mainButton">Tree</bs.Button>
                            </bs.Col>
                            <bs.Col 
                                xs = {2}
                                className = "mainCol"
                            >
                                <bs.Button className = "mainButton">Graph</bs.Button>
                            </bs.Col>
                            <bs.Col 
                                xs = {2}
                                className = "mainCol"
                            >
                                <bs.Button className = "mainButton">Custom</bs.Button>
                            </bs.Col>
                        </bs.Row>
                    </bs.Container>
                </bs.Navbar>
                <bs.Row>
                    
                </bs.Row>
            </bs.Container>
        )
    }
};

export default MainView;