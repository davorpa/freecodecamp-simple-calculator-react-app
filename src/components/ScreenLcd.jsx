import React from "react";
import "./ScreenLcd.css";

const ScreenLcd = ({ className, isErrMsg, value }) => {
    let cssClass = "screen-lcd";
    isErrMsg && (cssClass += " err");
    className && (cssClass += " " + className);

    return <div className={cssClass}>{value}</div>;
};

export default ScreenLcd;
