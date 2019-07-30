import React from 'react';
import Option from './Option';

const Options = (props) => (
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


export default Options;

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
