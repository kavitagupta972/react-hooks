
const UseRef = () => {

    function clickMe() {
        console.log("button is clicked");
    }
    return(
        <div>
            <input type = "text" placeholder = "type something..."></input>
            <button onClick = {clickMe}>change name</button>
        </div>
    );
}

export default UseRef;