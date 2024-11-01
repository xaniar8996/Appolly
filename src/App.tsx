
import React, { useRef, useState } from 'react';
import Test from "./Test";
import Info from "./Infos";

export default function App() {

    const [auth , setAuth] = useState(false);

    const NameList = [
        {
            firstName: "maziar",
            LastName: "naghavian"
        },
        {
            firstName: "Farhad",
            LastName: "Mohamadi"
        },
        {
            firstName: "Reza",
            LastName: "Alipoor"
        }
    ]

    const users = [
        {
            name: "xnaiar",
            email: "x655454@Gmail.com"
        },
        {
            name: "Ali",
            email: "Ali-277@Gmail.com"
        },
        {
            name: "Mohamad",
            email: "Mohamad-85@Gmail.com"
        },
    ]

    return (
        <>
            <Test
           name="xaniar" 
            />

            {/* <Info listname={NameList} /> */}

        </>
    )
}