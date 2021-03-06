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
            <h4 className={"mb-3"}>{"Session Length"}</h4>
            <section
                className={
                    "d-flex flex-row align-items-center justify-content-end"
                }>
                <p className={"display-4 mb-0 mr-3"}>{props.sessionLength}</p>
                <div className={"d-flex flex-column btn-group-vertical"}>
                    <button
                        className={"btn btn-secondary"}
                        disabled={props.isPlay ? "disabled" : ""}
                        type={"button"}
                        onClick={increaseSession}>
                        {"+"}
                    </button>
                    <button
                        className={"btn btn-secondary"}
                        disabled={props.isPlay ? "disabled" : ""}
                        type={"button"}
                        onClick={decreaseSession}>
                        {"-"}
                    </button>
                </div>
            </section>
        </section>
    );
}

export default SessionLength;
