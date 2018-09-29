import React from 'react'
import './Cell.css';

const Cell = ({ state }) => (
  <div className={"cell " + (state ? "active" : "")}>
  </div>
);

export default Cell;