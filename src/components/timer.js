import React from "react";

class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0,
        };

        this.handlePlayTimer = this.handlePlayTimer.bind(this);
        this.handleStopTimer = this.handleStopTimer.bind(this);
        this.handleResetTimer = this.handleResetTimer.bind(this);

        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    handlePlayTimer() {
        const intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.handlePlayStopTimer(true);
        this.setState({
            intervalId,
        });
    }

    handleStopTimer() {
        clearInterval(this.state.intervalId);
        this.props.handlePlayStopTimer(false);
    }

    handleResetTimer() {
        this.handleStopTimer();
        this.props.resetTimer();
        this.props.handlePlayStopTimer(false);
        this.setState({
            timerSecond: 0,
            isSession: true,
        });
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false,
                        });

                        this.props.toggleInterval(this.state.isSession);
                    } else {
                        this.setState({
                            isSession: true,
                        });

                        this.props.toggleInterval(this.state.isSession);
                    }
                } else {
                    this.props.updateTimerMinute();
                    this.setState({
                        timerSecond: 59,
                    });
                }
                break;
            default:
                this.setState(prevState => ({
                    timerSecond: prevState.timerSecond - 1,
                }));
                break;
        }
    }

    render() {
        return (
            <section>
                <session>
                    <h4>{this.state.isSession ? "Session" : "Break"}</h4>
                    <span>{this.props.timerMinute}</span>
                    <span>{":"}</span>
                    <span>
                        {this.state.timerSecond < 10
                            ? `0${this.state.timerSecond}`
                            : this.state.timerSecond}
                    </span>
                </session>
                <section>
                    <button type={"button"} onClick={this.handlePlayTimer}>
                        {"Play"}
                    </button>
                    <button type={"button"} onClick={this.handleStopTimer}>
                        {"Stop"}
                    </button>
                    <button type={"button"} onClick={this.handleResetTimer}>
                        {"Refresh"}
                    </button>
                </section>
            </section>
        );
    }
}

export default Timer;
