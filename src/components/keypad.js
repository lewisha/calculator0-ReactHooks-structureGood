import React from "react";

const keypad = (props) => {
  const keypadData = [
    { label: "(", value: "(" },
    { label: ")", value: ")" },
    { label: "AC", value: "AC" },
    { label: "C", value: "C" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "+", value: "+" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "-", value: "-" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "x", value: "*" },
    { label: "", value: "" },
    { label: "0", value: "0" },
    { label: "=", value: "=" },
    { label: "÷", value: "/" },
  ];

  const keypadLayout = keypadData.map((key, index) => {
    return (
      <React.Fragment key={index}>
        <button
          name={key.value}
          className="btn"
          onClick={(e) => props.onClick(e.target.name)}
        >
          {key.label}
        </button>
        {index === 3 || index === 7 || index === 11 || index === 15 ? (
          <br />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  });

  return <div className="keypad__container">{keypadLayout}</div>;
};

export default keypad;
