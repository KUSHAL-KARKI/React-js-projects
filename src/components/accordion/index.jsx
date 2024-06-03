import React from 'react'
import { useState } from 'react';
import data from './data';
import './style.css';
const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [enablemultipleselection, setEnableMultipleSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    function handleSingleSelection(getCurrentId) {
      setSelected(getCurrentId === selected ? null : getCurrentId);
    }
  
    function handleMultipleSelection(getCurrentId) {
      let cpyMultiple = [...multiple];
      const findIndexofcurrentId = cpyMultiple.indexOf(getCurrentId);
  
      if (findIndexofcurrentId === -1) {
        cpyMultiple.push(getCurrentId);
      } else {
        cpyMultiple.splice(findIndexofcurrentId, 1);
      }
      setMultiple(cpyMultiple);
    }
    return (
      <div className="wrapper">
        <button
          onClick={() => setEnableMultipleSelection(!enablemultipleselection)}
        >
          Enable Multiple Selection
        </button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    enablemultipleselection
                      ? () => handleMultipleSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h2>{dataItem.question}</h2>
                  <span>+</span>
                </div>
                {enablemultipleselection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    );
}

export default Accordion