
import React, {Component} from "react";

import NamesList from "./components/DisplayName/NamesList";

class App extends Component {
        state = {
            names: ["Mike", "Nevin", "Aaron", "Tory", "Kellie"]
            
        };
    

    render() {
        return (
            <div claseName="App">
            <h1>React Components Wookrsheet 1</h1>
            <h2> Import relevant component and add seed data if needed!</h2>
            <NamesList names={this.state.names} />
            </div>
        );
 } }

 export default App;  
