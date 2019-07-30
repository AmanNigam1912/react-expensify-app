class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //this.state is equivalent to this.age = sth
        this.state = {
            count: 0
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        //10 base system
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }

    handleAddOne() {
        //setState fn will allow us to manipulate that state object
        //prevState(can name anything) is a state obj before the changes are applied
        //setState updater fn we are not overwriting state obj completely we are changing specific values adn updating those already present
        //so use only those properties of obj that need to be updated inside the setState fn
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {        
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count : 0
            };
        });

        // this.setState((prevState) => {
        //     return {
        //         count : prevState.count + 1
        //     };
        // });

        //an old obsolete way for setState that takes in an object instead of a function
        //calls to setState are asynchronous, react uses virtual DOM algo to determine what needs to change
        //therefore, this.state in count: this.state.count + 1 is changed
        //so use this.setState with an updater fn as done above
        // this.setState({
        //     count: 0
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
        //as count was 0 and then very next we increment it's value, it won't change in very next line
        //this.state value in count: this.state.count + 1 still gives us the old value and not 0

    }
    render() {
        return ( 
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

//ReactDOM.render(<Counter count={5}/>,document.getElementById('app'));
ReactDOM.render(<Counter />,document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count = count + 1;
//     //console.log('addOne', count);
//     //to render count data on the screen
//     renderCounterApp();
// };
// const minusOne = () => {
//     //console.log('minusOne');
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     //console.log('reset')
//     count = 0;
//     renderCounterApp();
// };

// //get the elemnt by its id and gave div and id of app in index.html
// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     //class in tags is used to add identifiers to elements that can be shared across multiple elements
//     //class in html is now called className in JSX
//     //const someId = 'my-id';
//     //JSX does not have bild in data binding
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             {/*<button id={someId} className="button">+1</button>*/}
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     //Render our application
//     //1st argu is the JSX you want to render,
//     //2 argu dom element, where you want to render it
//     //created in index.html
//     //ReactDOM.render(template, appRoot);

//     //***************IMPORTANT**********************************
//     //React is super efficient, it uses virtual DOM algorithms in JS to determine minimal number of changes taht need to be made
//     //in order to correctly render the new application
//     //here the <div>'s need not to be replaced or not even <h1> but only a part of it is being replaced, check element panel when we click any button
//     //using ReactDOM.render we are getting all the capabilities of React, using virtual DOM algorithms to render and re render our app 
//     ReactDOM.render(templateTwo, appRoot)
// };

// renderCounterApp();