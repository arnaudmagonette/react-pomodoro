import React from "react";

function SessionLength(props) {
    function decreaseSession() {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }
    function increaseSession() {
        if (props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }
    return (
        <section>
            <h4>{"Session Length"}</h4>
            <section>
                <button type={"button"} onClick={decreaseSession}>
                    {"-"}
                </button>
                <p>{props.sessionLength}</p>
                <button type={"button"} onClick={increaseSession}>
                    {"+"}
                </button>
            </section>
        </section>
    );
}

export default SessionLength;
