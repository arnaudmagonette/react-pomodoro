import React from "react";

function BreakInterval(props) {
    function decreaseCounter() {
        if (props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak();
    }
    function increaseCounter() {
        if (props.breakInterval === 60) {
            return;
        }
        props.increaseBreak();
    }
    return (
        <section>
            <h4>{"Break Length"}</h4>
            <section>
                <button type={"button"} onClick={decreaseCounter}>
                    {"-"}
                </button>
                <p>{props.breakInterval}</p>
                <button type={"button"} onClick={increaseCounter}>
                    {"+"}
                </button>
            </section>
        </section>
    );
}

export default BreakInterval;
