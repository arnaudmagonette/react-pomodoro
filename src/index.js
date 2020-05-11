import React from "react";
import ReactDOM from "react-dom";

class Timer extends React.Component {
    render() {
        return (
            <main
                className={
                    "d-flex flex-row justify-content-center align-items-center h-100"
                }
            />
        );
    }
}

// ---------------------------------------------------------

ReactDOM.render(<Timer />, document.querySelector("#pomodoro"));
