import React from "react";
import BreakInterval from "./breack-interval";
import SessionLength from "./session-length";
import Timer from "./timer";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25,
            isPlay: false,
        };

        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);

        this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
        this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);

        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);

        this.onToggleInterval = this.onToggleInterval.bind(this);

        this.onResetTimer = this.onResetTimer.bind(this);
        this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
    }

    onDecreaseBreakLength() {
        this.setState(prevState => ({
            breakLength: prevState.breakLength - 1,
        }));
    }

    onIncreaseBreakLength() {
        this.setState(prevState => ({
            breakLength: prevState.breakLength + 1,
        }));
    }

    onDecreaseSessionLength() {
        this.setState(prevState => ({
            sessionLength: prevState.sessionLength - 1,
            timerMinute: prevState.sessionLength - 1,
        }));
    }

    onIncreaseSessionLength() {
        this.setState(prevState => ({
            sessionLength: prevState.sessionLength + 1,
            timerMinute: prevState.sessionLength + 1,
        }));
    }

    onUpdateTimerMinute() {
        this.setState(prevState => ({
            timerMinute: prevState.timerMinute - 1,
        }));
    }

    onToggleInterval(isSession) {
        if (isSession) {
            this.setState({
                timerMinute: this.state.sessionLength,
            });
        } else {
            this.setState({
                timerMinute: this.state.breakLength,
            });
        }
    }

    onResetTimer() {
        this.setState({
            timerMinute: this.state.sessionLength,
        });
    }

    onPlayStopTimer(isPlay) {
        this.setState({
            isPlay,
        });
    }

    render() {
        return (
            <main>
                <h2>{"Pomodoro Clock"}</h2>
                <BreakInterval
                    breakInterval={this.state.breakLength}
                    increaseBreak={this.onIncreaseBreakLength}
                    decreaseBreak={this.onDecreaseBreakLength}
                    isPlay={this.state.isPlay}
                />
                <SessionLength
                    sessionLength={this.state.sessionLength}
                    increaseSession={this.onIncreaseSessionLength}
                    decreaseSession={this.onDecreaseSessionLength}
                    isPlay={this.state.isPlay}
                />
                <Timer
                    timerMinute={this.state.timerMinute}
                    breakLength={this.state.breakLength}
                    updateTimerMinute={this.onUpdateTimerMinute}
                    toggleInterval={this.onToggleInterval}
                    resetTimer={this.onResetTimer}
                    handlePlayStopTimer={this.onPlayStopTimer}
                />
            </main>
        );
    }
}

export default App;
