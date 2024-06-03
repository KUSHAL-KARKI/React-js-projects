import React from "react";
import QrCode from "react-qr-code";
import { useState } from "react";
import "./style.css";
const QrCodeGenerate = () => {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput] = useState("");
  function handelGenerateQrCode() {
    setQrcode(input);
  }

  return (
    <div className="container">
      <h1 className="QR"> QR CODE GENERATOR</h1>
      <div className="inputs">
        {" "}
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter Your Value"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handelGenerateQrCode}
        >
          Generate
        </button>
      </div>

      <div>
        <QrCode
          id="qr-code-value"
          value={qrcode}
          size={400}
          bgColor="#ffffff"
        />
      </div>
    </div>
  );
};

export default QrCodeGenerate;
