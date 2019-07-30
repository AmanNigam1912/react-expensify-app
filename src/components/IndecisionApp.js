import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        //for modal
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // });

        //new syntax for arrow fn but put in ({}) rather than in {}
        this.setState(() => ({
            options: []
        }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
    };
    handleAddOption =(option) => {
        if(!option) {
            return 'Enter valid value to add item';
        } 
        //indexOf returns the index of item, 0 if 1st item, 1 if 2nd item and -1 if it doesn't exist at all
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        // this.setState((prevState) => {
        //     return {
        //         //options: prevState.options.concat([option])
        //         //with or without [] works the same way
        //         options: prevState.options.concat(option)
        //     }
        // });

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };

    handleSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };
    //props are the properties we give to a tag like title, subtitle, hasOptions, options, etc.
    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     // this.state = {
    //     //     options: []
    //     // };
    // }

    //Lifecycle method only applicable in class based component not in stateless functional component
    //fired when component gets mounted to the DOM
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            //parse will get back the object
            const options = JSON.parse(json);

            if (options) {
                //this will show the data to the screen even after refresh as it has been stored in localStorage
                this.setState(() => ({ options }))
            }
        } catch (e) {
            //if invalid data do nothing at all
        }
        
    }

    //fired after component is updated like state value change or props value change
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            //stringify takes an object and convert it into a string
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    //fired before component go away
    //barely used
    componentWillUnmount() {
        console.log('component will unmont');
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                {/* when we create instance of react component we can pass data into it, looks like HTML attribute but it's just key value pairs */}
                {/* key has to be string value could be anything like string, number, array, or any other type  */}
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}  
                    handlePick={this.handlePick}              
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleSelectedOption={this.handleSelectedOption}
                />
            </div>
        );
    }
}