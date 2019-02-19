import React, { Component } from 'react';

class AutoComplete extends Component {
    constructor(props){
        super(props)

        this.state ={
            suggestions: [],
            text: ""
           
        }

        this.newList = [
            "blue",
            "yellow",
            "orange",
            "purple",

        ]
    }



    handleChange = (event) => {
        const value = event.target.value
        let suggestions = []
        if(value.length > 0){
            const regex = RegExp(`^${value}`, 'i')
            suggestions = this.newList.sort().filter(item => regex.test(item))
            
        }
        this.setState(() =>({suggestions: suggestions, text:value}))
    }

    selectSuggestion = (value) =>{
        this.setState(() => ({text: value, suggestions: []}))
    }

    renderSuggestions = () =>{
        const suggestions = this.state.suggestions
        if(suggestions.length === 0) {
            return null
        }else{
            return(
                suggestions.map((item) => <li onClick={() =>this.selectSuggestion(item)}>{item} </li>)
            )
        }
    }

    render() {
        return (
            <div>
                <input value={this.state.text} name="text" value={this.state.text} onChange={this.handleChange} type="text"/>
                <ul>
                    {this.renderSuggestions()}
                </ul>
            </div>
        );
    }
}

export default AutoComplete;
