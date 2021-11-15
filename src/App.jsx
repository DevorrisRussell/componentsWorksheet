
import React, {Component} from "react";

import SuperheroTable from "./components/DisplayName/SuperheroTable";

class App extends Component {
        state = { superheroes: [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondarAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondarAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondarAbility: 'Shoots web'
            }
        ]
    };
            
        
        

    render() {
        return (
            <div claseName="App">
            <h1>React Components Wookrsheet 1</h1>
            <h2> Import relevant component and add seed data if needed!</h2>
            <SuperheroTable superheroes={this.state.superheroes}/>
            </div>
        );
 } }

 export default App;  
