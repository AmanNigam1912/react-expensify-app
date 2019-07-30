import React from 'react';
import Modal from'react-modal';

// const OptionModal = () => {
//     return (
//         <div>
//             some text
//         </div>
//     );
// };

const OptionModal = (props) => (
    // <div>
    //     some text
    // </div>
    //isOpen tells us whether or not the modal should be open
    //contentLabel used for accessibility purposes, "" will show up only when accessibility setting is enabled , not shown in browser  
    //!! true booleans which means undefined or 'test'. both are not boolean
    //!!'test' converts a valid string to true
    //!!undefined converted to false
    //onRequestClose calls a function when user try to close the modal via escape key or via clicking the background
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleSelectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleSelectedOption}>Okay</button>
    </Modal>
);


export default OptionModal;