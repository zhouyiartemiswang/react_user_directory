import React from 'react'

export default function TableRow(props) {
    return (
        <div className="row">
            <div className="col-md-2">
                {props.image === "Image"? 
                <span>{props.image}</span> : <img src={props.image}/>
                }
                {/* <img src={props.image}/> */}
            </div>
            <div className="col-md-3">
                <span>{props.name}</span>
            </div>
            <div className="col-md-3">
                <span>{props.phone}</span>
            </div>
            <div className="col-md-3">
                <span>{props.email}</span>
            </div>
            <div className="col-md-1">
                <span>{props.age}</span>
            </div>
        </div>
    )
}
