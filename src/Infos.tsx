
import React from "react";

type listname = {
    listname:{
        firstName:string,
        LastName:string
    }[]
}


export default function Info(props : listname) {
    return (
        <>
            <div>
                {props.listname.map(names => {
                    return(
                        <>
                        <h1>{names.firstName}</h1>
                        </>
                    )
                })}
            </div>
        </>
    )
}