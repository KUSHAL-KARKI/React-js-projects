import React, { useEffect } from "react";
import { useState } from "react";
const Colorfinder = () => {
  const [typeofcolor, settypeofcolor] = useState("hex");
  const [color, setcolor] = useState("#000000");
  function handeCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * hex.length);
      hexColor += hex[random];
    }
    setcolor(hexColor);
  }
  function handeCreateRandomRgbColor() {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
      const random = Math.floor(Math.random() * 256);
      rgb.push(random);
    }
    setcolor(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
  }
  useEffect(() => {
    if (typeofcolor === "hex") {
      handeCreateRandomHexColor();
    } else {
      handeCreateRandomRgbColor();
    }
  }, [typeofcolor]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: color,
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        justifyContent: "center",  
    }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            marginRight: "10px",
            padding: "20px",
            borderRadius: "30px",
            borderStyle: "none",
            backgroundColor: "dodgerblue",
            fontWeight:"bold",
            fontSize:"20px",

          }}
          onClick={() => settypeofcolor("hex")}
        >
          Create Hex Color
        </button>
        <button
          style={{
            marginRight: "10px",
            padding: "20px",
            borderRadius: "30px",
            borderStyle: "none",
            backgroundColor: "dodgerblue",
            fontWeight:"bold",
            fontSize:"20px",

          }}
          onClick={() => settypeofcolor("rgb")}
        >
          Create RGB Color
        </button>
        <button
          style={{
            marginRight: "10px",
            padding: "20px",
            borderRadius: "30px",
            borderStyle: "none",
            backgroundColor: "dodgerblue",
            fontWeight:"bold",
            fontSize:"20px",

          }}
          onClick={
            typeofcolor === "hex"
              ? handeCreateRandomHexColor
              : handeCreateRandomRgbColor
          }
        >
          Generate
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "2rem",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <h2 style={
            {   
                padding: "20px 40px",
                border: "3px solid white",
            }
        }>{typeofcolor === "rgb" ? "RGB Color" : "HEX Color"}</h2>
        <h1 style={
            {   
                padding: "10px 40px",
                border: "3px solid white",
            }
        }>{color}</h1>
      </div>
    </div>
  );
};

export default Colorfinder;
