
import React, { useState } from 'react';
import "./style.css"

type Message = {
    name: string,
}

export default function Test(props : Message) {

    return (
        <>
            <h1>hello {props.name}</h1>
        </>
    )
}