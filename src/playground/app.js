//component is class itself. give all features of react
//the class name must start with a capital character
//all react component must have 1st char as uppercase

class IndecisionApp extends React.Component {
    //props are the properties we give to a tag like title, subtitle, hasOptions, options, etc.
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

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

    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // });

        //new syntax for arrow fn but put in ({}) rather than in {}
        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
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
            </div>
        );
    }
}

//they are fast as they don't have to manage any lifecycle
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle &&  <h2>{props.subtitle}</h2>}
        </div>
    );        
};

Header.defaultProps = {
    title: 'Indecision'
};

// class Header extends React.Component {
//     //necessary to use this method(must)
//     render() {
//         //this is the reference to the current instance of this component
//         //takes the HTML attribute like <Header title="Test value"/> and converts it into object key value pairs
//         //console.log(this.props);
//         //return jsx
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }     
// }

//convert class based component to stateless component
//if i have a class based component with just render method convert to stateless component as shown below
const Action = (props) => {
    return (
        <div>
            {/* this.props.handlePick will call the handlePick from this child whose prop handlePick is defined in parent */}
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 {/* this.props.handlePick will call the handlePick from this child whose prop handlePick is defined in parent */}
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            {/* see playground bind-method.js for bind functionality
                not efficient to use it so we create a constructor and use it 
            <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> 
            <button onClick={this.handleRemoveAll}>Remove All</button> */}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                //this.props.options.map((option) => <p key={option}>{option}</p>)
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }                
        </div>
    );       
};

// class Options extends React.Component{
//     // //props works the same way as this.props in render()
//     // constructor(props) {
//     //     //if super(props) not called we will not have access to props
//     //     super(props);
//     //     //just do bind(this) only once when it is initialised
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }
//     // //doing this.handleRemoveAll = this.handleRemoveAll.bind(this); ensures whenever handleRemoveAll is called
//     // //the context is correct
//     // handleRemoveAll() {
//     //     console.log(this.props.options);
//     //     //alert('handleRemoveAll');
//     // }
//     render() {
//         return (
//             <div>
//                 {/* see playground bind-method.js for bind functionality
//                     not efficient to use it so we create a constructor and use it 
//                 <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> 
//                 <button onClick={this.handleRemoveAll}>Remove All</button> */}
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     //this.props.options.map((option) => <p key={option}>{option}</p>)
//                     this.props.options.map((option) => <Option key={option} optionText={option}/>)
//                 }                
//             </div>
//         );
//     }    
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}  
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>  
        </div>
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}    
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {
    //whenever we are using this we need to setup the constructor function
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
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

// const jsx = (
//     <div>
//         {/* to render a react component use it as a tag in jsx */}
//         {/* Header with caps H is treated not as a string in app.js of scripts folder */}
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// );

//stateless functional component - cannot use state but can use props
//props are passed here in argument same as this in class based components
//with the key value pairs
// const User = (props) => {
//     return (
//         <div>
//         {/* if it was a class based component the js exp would be this.props.name */}
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// };

//ReactDOM.render(<IndecisionApp options={['Devils den', 'Second District']}/>, document.getElementById('app'));
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//if the tag starts with a lowecase letter in jsx it will assume we are creating an html element
// when using an upper case element it will search that in scope and refernce that in react.creatElement call
//ReactDOM.render(<User name="Aman" age={27}/>, document.getElementById('app'));