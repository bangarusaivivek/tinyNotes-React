import './Layout.css'
import AddButton from './AddButton'
import RemoveButton from './RemoveButton'
import React from 'react'
import OverviewNotes from './OverviewNotes'

function ContainerLayout(props) {
    console.log(props)
    const {deleteNotes,newNotes} = props
    return (
        <>
            <div className="main-container">
                <div className="navbar">
                    <div className="firstnav">
                        <AddButton  click={newNotes}/>
                        <RemoveButton  click={deleteNotes}/>
                        <div className="button"></div>
                        <div className="button"></div>

                    </div>
                    <div className="secondnav">
                        <div className="button"></div>
                        <div className="button"></div>
                        <div className="button"></div>
                        <div className="button"></div>

                    </div>
                    <div className="thirdnav">
                        <div className="button"></div>
                        <div className="button"></div>
                        <div className="button"></div>

                        <input type="search" className="search-bar" placeholder="search"/>
                    </div>
                
                </div>
                <div className="text-container">
                    <div className="overview-container" id="overviewContainer">
                        <OverviewNotes />
                    </div>

                    <div className="data-container" id="dataContainer">
                        {/* {isEmpty && <>
                                    <input type="text" placeholder="Title" className="title" onChange={this.titleChanger}   />
                                    <textarea placeholder="Type here" className="contentBody" onChange={this.contentChanger}  />
                                    </>} */}
                               {/* <DataContainer empty={isEmpty} title={this.titleChanger} content={this.contentChanger} /> */}
                            
                    </div>
                </div>
            </div>
            
        </>
    )
    
}

export default ContainerLayout

