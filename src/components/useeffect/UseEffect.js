import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffect  = () => {

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response => {
            setData(response.data[count].email);
        })
        console.log("API is called");
    });
    useEffect(() => {

        console.log("data state change");
    }, [data]);
    useEffect(() => {

        console.log("data state change");
    }, []);
    useEffect(() => {
        console.log("count state changed");
    }, [count]);

    return (
        <React.Fragment>
        <h1> UseEffect Hook {data}</h1>
        <h2>{count}</h2>
        <button onClick = {() => {
            setCount(count+1);
        }}>Counter</button>
        </React.Fragment>
    );
}

export default UseEffect;