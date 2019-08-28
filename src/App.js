import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { AddTodo } from "./useReducer/AddTodo";
import { Word } from "./useMemo/Word";
import { IntroName } from "./useState/IntroName";
import { SaveName } from "./useEffect/SaveName";
import { FormUseCustomHook } from "./customhooks/FormUseCustomHook";
import { FormUseRef } from "./useRef/FormUseRef";

function App() {
  
  return (
   <div>
    <h3> - useReducer: </h3>
    <AddTodo />
    <h3> - useMemo: </h3>
    <Word />
    <h3> - useState: </h3>
    <IntroName />
    <h3> - useEffect: </h3>
    <SaveName />
    <h3> - custom hooks: </h3>
    <FormUseCustomHook />
    <h3> - useRef: </h3>
    <FormUseRef />
  </div>
  );
}

export default App;
