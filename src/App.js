import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button, { ButtonDigit, ButtonFx } from "./components/Button";
import ScreenLcd from "./components/ScreenLcd";

function App() {
    const [output, setOutput] = useState("");
    const [expr, setExpr] = useState(output);
    const [hasScreenMsg, setScreenMsg] = useState(false);

    const handleInput = ({ value, operator }) => {
        setOutput(output + value);
        setExpr(expr + (operator ?? value));
    };

    const reset = () => {
        setOutput("");
        setExpr("");
        setScreenMsg(false);
    };

    const evaluate = () => {
        setOutput(expr);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <main className="App-main">
                <ScreenLcd isErrMsg={hasScreenMsg} value={output} />

                <div className="row">
                    <ButtonDigit
                        value={7}
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                    <ButtonDigit
                        value={8}
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                    <ButtonDigit
                        value={9}
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                    <ButtonFx
                        fx="div"
                        operator="/"
                        symbol="÷"
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                </div>
                <div className="row">
                    <ButtonDigit
                        value={4}
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                    <ButtonDigit
                        value={5}
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                    <ButtonDigit
                        value={6}
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                    <ButtonFx
                        fx="mul"
                        operator="*"
                        symbol="×"
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                </div>
                <div className="row">
                    <ButtonDigit
                        value={1}
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                    <ButtonDigit
                        value={2}
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                    <ButtonDigit
                        value={3}
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                    <ButtonFx
                        fx="sub"
                        operator="-"
                        symbol="−"
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                </div>
                <div className="row">
                    <Button className="cls" onClick={reset}>
                        CE
                    </Button>
                    <ButtonDigit
                        value={0}
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                    <ButtonDigit
                        className="dot"
                        value="."
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                    <ButtonFx
                        fx="add"
                        operator="+"
                        symbol="+"
                        onInput={handleInput}
                        disabled={hasScreenMsg}
                    />
                </div>
                <div className="row">
                    <Button
                        className="eval"
                        onClick={evaluate}
                        disabled={hasScreenMsg}
                    >
                        =
                    </Button>
                </div>
            </main>
        </div>
    );
}

export default App;
