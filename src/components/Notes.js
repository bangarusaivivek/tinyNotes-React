import React from 'react'

function Notes(props) {
    const {itemList} = props;
    console.log(itemList)
    return (
        <>
            {
                itemList.map((item,index)=>{
                    console.log(item)
                    const {id,title,content} = item;
                    return(
                        <div className="tinyNote" id={id}>{title}</div>
                    )
                })
            }
        </>
    )
}

export default Notes



