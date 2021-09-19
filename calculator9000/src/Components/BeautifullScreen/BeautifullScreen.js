import React from "react";
import classes from "./BeautifullScreen.module.css";

const beautifullScreen = (props) => {
    return (
        <div className={classes.resultat}>
             {classes.operation}{props.children}
        </div>
    )
}

export default beautifullScreen;