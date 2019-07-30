import React from 'react';

//for class we can use export default before its name
//while same is not allowed for const
export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    //whenever we are using this we need to setup the constructor function
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     //not required anymore as we have replaced it with class transform es6 property 
    //     //as mentioned above before constructor
    //     // this.state = {
    //     //     error: undefined
    //     // };
    // }
    //use class property to set up event handler
    handleAddOption = (e) => {
        e.preventDefault();
       
        const option = e.target.elements.addOption.value.trim();
        const error = this.props.handleAddOption(option);

        // this.setState(() => {
        //     return {
        //         //using es6 shorthand notation
        //         //error: error
        //         error
        //     }
        // });

        this.setState(() => ({
            error
        }));

        if (!error) {
            //to wipe the input of the input box when valid data is entered
            e.target.elements.addOption.value = '';
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='addOption'></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}