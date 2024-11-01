
import React, { Ref, RefObject, useEffect, useRef, useState, Component } from 'react';
import "./style.css"

type ItemsProps = {
    name:string
}

export default function Test(props : ItemsProps) {
    return (
        <>
                <h1>{props.name}</h1>
        </>
    )
}