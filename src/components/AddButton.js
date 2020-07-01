import React from 'react'
import Logo from '/Users/bangarusaivivek/React/tinynotes/src/images/003-edit.png'
function AddButton(props) {

    
    return (
        <div className="add-button" id="addButton"  onClick = {props.click}>
            <img src={Logo} alt="+"/>
        </div>
    )
}

export default AddButton


