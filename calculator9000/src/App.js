import React, { useState } from "react";
import TheTitle from "./Components/TheTitle/TheTitle";
import ItsOverNineThousand from "./Components/ItSOverNineThousand/ItSOverNineThousand";
import BeautifullScreen from "./Components/BeautifullScreen/BeautifullScreen";
import GreatOperationButton from "./Components/GreatOperationButton/GreatOperationButton";
import AmazingNumberButton from "./Components/AmazingNumberButton/AmazingNumberButton";
import MagnificientEqualButton from "./Components/MagnificientEqualButton/MagnificientEqualButton";
import './index.css';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ['/', '*', '-', '+', '.'];
  const [over, setOver] = useState("");

  const handlerUpdateCalcul = value => {
    if (
      ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }

    setCalc(calc + value)

    setOver("");

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const handlerCalcEqual = () => {

    if (result > 8999) {

      setOver("It’s Over 9000 !!!")
      setCalc("")
      setResult("")
    }
    else {
      return setCalc(eval(calc).toString())
    }
  }

  const handlerCalcDel = () => {
    if (calc === '') {
      return
    }

    const value = calc.slice(0, -1);
    setCalc(value);

  }
  return (
    <div className="App">
      <TheTitle />
      <ItsOverNineThousand>{over}</ItsOverNineThousand>
      <div className="container">
        <div className="Calculator">
          <BeautifullScreen>{result ? <span>({result})</span> : ""} {calc || "0"}</BeautifullScreen>
          <div className="operation">
            <GreatOperationButton classe="buttonOperation" clic={() => { handlerUpdateCalcul("/") }}>/</GreatOperationButton>
            <GreatOperationButton classe="buttonOperation" clic={() => { handlerUpdateCalcul("*") }}>*</GreatOperationButton>
            <GreatOperationButton classe="buttonOperation" clic={() => { handlerUpdateCalcul("-") }}>-</GreatOperationButton>
            <GreatOperationButton classe="buttonOperation" clic={() => { handlerUpdateCalcul("+") }}>+</GreatOperationButton>
            <GreatOperationButton classe="buttonOperation" clic={() => { handlerCalcDel() }}>DEL</GreatOperationButton>
          </div>
          <div className="touches">
            <AmazingNumberButton classe="buttonNumber" clic={() => { handlerUpdateCalcul("7") }}>7</AmazingNumberButton>
            <AmazingNumberButton classe="buttonNumber" clic={() => { handlerUpdateCalcul("8") }}>8</AmazingNumberButton>
            <AmazingNumberButton classe="buttonNumber" clic={() => { handlerUpdateCalcul("9") }}>9</AmazingNumberButton>
            <AmazingNumberButton classe="buttonNumber" clic={() => { handlerUpdateCalcul("4") }}>4</AmazingNumberButton>
            <AmazingNumberButton classe="buttonNumber" clic={() => { handlerUpdateCalcul("5") }}>5</AmazingNumberButton>
            <AmazingNumberButton classe="buttonNumber" clic={() => { handlerUpdateCalcul("6") }}>6</AmazingNumberButton>
            <AmazingNumberButton classe="buttonNumber" clic={() => {handlerUpdateCalcul("1") }}>1</AmazingNumberButton>
            <AmazingNumberButton classe="buttonNumber" clic={() => { handlerUpdateCalcul("2") }}>2</AmazingNumberButton>
            <AmazingNumberButton classe="buttonNumber" clic={() => { handlerUpdateCalcul("3") }}>3</AmazingNumberButton>
            <AmazingNumberButton classe="buttonNumber" clic={() => { handlerUpdateCalcul("0") }}>0</AmazingNumberButton>
            <GreatOperationButton classe="buttonNumber" clic={() => { handlerUpdateCalcul(".") }}>.</GreatOperationButton>
            <MagnificientEqualButton classe="buttonEqual" clic={() => { handlerCalcEqual() }}>=</MagnificientEqualButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
