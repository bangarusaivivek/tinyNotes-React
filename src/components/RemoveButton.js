import React from 'react'
import Logo from '/Users/bangarusaivivek/React/tinynotes/src/images/005-remove-file.png'
function RemoveButton(props) {
    return (
        <div className="remove-button" id="removeButton" onClick={props.click}>
            <img src={Logo} alt="-"/>
        </div>
    )
}

export default RemoveButton
