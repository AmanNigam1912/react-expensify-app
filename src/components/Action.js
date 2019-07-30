import React from 'react';

//convert class based component to stateless component
//if i have a class based component with just render method convert to stateless component as shown below
const Action = (props) => (
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

export default Action;
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
