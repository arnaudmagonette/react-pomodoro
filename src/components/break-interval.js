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
            <h4 className={"mb-3"}>{"Break Length"}</h4>
            <section
                className={
                    "d-flex flex-row align-items-center justify-content-end"
                }>
                <p className={"display-4 mb-0 mr-3"}>{props.breakInterval}</p>
                <div className={"d-flex flex-column btn-group-vertical"}>
                    <button
                        className={"btn btn-secondary"}
                        disabled={props.isPlay ? "disabled" : ""}
                        type={"button"}
                        onClick={increaseCounter}>
                        {"+"}
                    </button>
                    <button
                        className={"btn btn-secondary"}
                        disabled={props.isPlay ? "disabled" : ""}
                        type={"button"}
                        onClick={decreaseCounter}>
                        {"-"}
                    </button>
                </div>
            </section>
        </section>
    );
}

export default BreakInterval;
