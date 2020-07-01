import React, { Component } from 'react'
import ContainerLayout from './ContainerLayout';
import NoteCreation from './NoteCreation';

export class DataContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            items : [],
            title : "",
            content : "",
            isCreate : true,
            isWrite : false,
        }
        this.newNotes = this.newNotes.bind(this);
        this.deleteNotes = this.deleteNotes.bind(this);
        this.writeNotes = this.writeNotes.bind(this);
    }
    newNotes(e){
        if(this.state.isCreate){
            console.log("i am creating")
            this.setState({
                isCreate : false,
                isWrite : true,
            })
        }
        
        
    }
    deleteNotes(e){
        console.log("i am deleting")
    }
    writeNotes(){

    }
    

    render() {
        const commonProps = {
            newNotes : this.newNotes,
            deleteNotes : this.deleteNotes,
        }
        return (
            <div>
                <ContainerLayout {...commonProps} />
            <NoteCreation {...commonProps}/>

            </div>
        )
    }
}

export default DataContainer

