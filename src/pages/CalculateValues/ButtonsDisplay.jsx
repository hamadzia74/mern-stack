// import { Button } from "bootstrap"

import { useState } from "react";

function ButtonsDisplay() {
  const [val, setVal] = useState(0);
  const [prevVal, setPrevVal] = useState();
  const [sign, setSign] = useState();
  console.log(" prevVal", prevVal);
  console.log(" val", val);

  const operatorHandler = (e) => {
    const inputSign = e.target.value;
    setSign(inputSign);
    setVal(0);
    setPrevVal(val);
  }

  const inputVal = (e) => {
    const input = e.target.value;
    if (val === 0) {
      setVal(input);
    } else setVal(val + input);
  };

  const ac = () => {
    setVal(0);
  };

  const handleChange = () => {
    if (val > 0) {
      setVal(-val);
    } else {
      setVal(Math.abs(val));
    }
  };

  const handleAdd = () => {
    setVal(parseFloat(prevVal) + parseFloat(val));
  };

  const handlePercent = () => {
    setVal(val / 100);
  };

  const handleSub = () => {
    setVal(parseFloat(prevVal) - parseFloat(val));
  };

  const handleMul = () => {
    setVal(parseFloat(prevVal) * parseFloat(val));
  };
  const handleDiv = () => {
    if (val === "0") {
      alert("Divide by 0 error - Make sure the divisor isn’t zero");
      return "0";
    }
    return setVal(parseFloat(prevVal) / parseFloat(val));
  };
  function handleCalculate() {
    switch (sign) {
      case "+":
        return handleAdd();
      case "-":
        return handleSub();
      case "x":
        return handleMul();
      case "/":
        return handleDiv();
      default:
        return null;
    }
  }
  return (
    <div>
      <div className="buttons-display">
        <div className="values-display">
          <div className="values-comp">{val}</div>
        </div>
        <div className="buttons-row">
          <button type="button" value="c" onClick={(e) => ac(e)}>
            AC
          </button>
          <button type="button" value="\xB1" onClick={(e) => handleChange(e)}>
            +/-
          </button>
          <button type="button" value="%" onClick={(e) => handlePercent(e)}>
            %
          </button>
          <button
            type="button"
            className="button-color-orange"
            value="/"
            onClick={(e) => operatorHandler(e)}
          >
            ÷
          </button>
        </div>
        <div className="buttons-row">
          <button type="button" value="7" onClick={(e) => inputVal(e)}>
            7
          </button>
          <button type="button" value="8" onClick={(e) => inputVal(e)}>
            8
          </button>
          <button type="button" value="9" onClick={(e) => inputVal(e)}>
            9
          </button>
          <button
            type="button"
            className="button-color-orange"
            value="x"
            onClick={(e) => operatorHandler(e)}
          >
            x
          </button>
        </div>
        <div className="buttons-row">
          <button type="button" value="4" onClick={(e) => inputVal(e)}>
            4
          </button>
          <button type="button" value="5" onClick={(e) => inputVal(e)}>
            5
          </button>
          <button type="button" value="6" onClick={(e) => inputVal(e)}>
            6
          </button>
          <button
            type="button"
            className="button-color-orange"
            value="-"
            onClick={(e) => operatorHandler(e)}
          >
            -
          </button>
        </div>
        <div className="buttons-row">
          <button type="button" value="1" onClick={(e) => inputVal(e)}>
            1
          </button>
          <button type="button" value="2" onClick={(e) => inputVal(e)}>
            2
          </button>
          <button type="button" value="3" onClick={(e) => inputVal(e)}>
            3
          </button>
          <button
            type="button"
            className="button-color-orange"
            value="+"
            onClick={(e) => operatorHandler(e)}
          >
            +
          </button>
        </div>
        <div className="buttons-row">
          <button
            type="button"
            className="button-span"
            value="0"
            onClick={(e) => inputVal(e)}
          >
            0
          </button>
          <button type="button" value="." onClick={(e) => inputVal(e)}>
            .
          </button>
          <button
            type="button"
            className="button-color-orange"
            value="="
            onClick={(e) => handleCalculate(e)}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default ButtonsDisplay;
