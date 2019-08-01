import React from 'react';
import Option from './Option';

const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                {/* see playground bind-method.js for bind functionality
                    not efficient to use it so we create a constructor and use it 
                <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> 
                <button onClick={this.handleRemoveAll}>Remove All</button> */}
                <button 
                    // button with a modifier button--link, so we use all the styles from button with a modified button--link
                    className="button button--link"
                    onClick={props.handleDeleteOptions}
                >
                    Remove All
                </button>
            </div>
            
            {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
            {
                //this.props.options.map((option) => <p key={option}>{option}</p>)
                //map gives access to index 0 for 1st item, 1 for 2nd item
                props.options.map((option, index) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        count={index + 1}
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
