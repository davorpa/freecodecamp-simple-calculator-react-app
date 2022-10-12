import React from "react";
import "./Button.css";

export default function Button(props) {
    const { className, children, onClick, disabled } = props;

    let cssClass = "btn";
    className && (cssClass += " " + className);
    disabled && (cssClass += " disabled");

    const handleClick = () => {
        !disabled && onClick && onClick();
    };

    return (
        <button className={cssClass} onClick={handleClick} disabled={disabled}>
            {children}
        </button>
    );
}

export function ButtonDigit(props) {
    const { className, value, onInput, disabled } = props;

    let cssClass = "btn-digit";
    className && (cssClass += " " + className);

    const handleInput = () => {
        onInput && onInput({ value });
    };

    return (
        <Button className={cssClass} onClick={handleInput} disabled={disabled}>
            {value}
        </Button>
    );
}

export function ButtonFx(props) {
    const { fx, symbol, onInput, disabled } = props;

    let cssClass = "btn-fx";
    fx && (cssClass += " fx-" + fx);

    const handleInput = () => {
        onInput && onInput({ fx, value: symbol });
    };

    return (
        <Button className={cssClass} onClick={handleInput} disabled={disabled}>
            {symbol}
        </Button>
    );
}
