import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { AddTodo } from './useReducer/AddTodo';
import { Word } from './useMemo/Word';
import { IntroName } from './useState/IntroName';
import { SaveName } from './useEffect/SaveName';
import { FormUseCustomHook } from './customhooks/FormUseCustomHook';
import { FormUseRef } from './useRef/FormUseRef';
import { TestUseContext } from './useContext/TestUseContext';
import { UserProvider } from './useContext/UserContext';
import { Shape } from './useLayoutEffect/Shape';
import { WordCallBack } from './useCallback/WordCallBack';
import { ImperativeHandle } from './useImperativeHandle/ImperativeHandle';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
function App() {
  
  return (
    <Router>
      <NavLink activeClassName="active-link"  to="/state">state</NavLink>
      <NavLink activeClassName="active-link"  to="/effect">effect</NavLink>
      <NavLink activeClassName="active-link"  to="/context">context</NavLink>
      <NavLink activeClassName="active-link"  to="/custom">custom</NavLink>
      <NavLink activeClassName="active-link"  to="/ref">ref</NavLink>
      <NavLink activeClassName="active-link"  to="/layouteffect">layouteffect</NavLink>
      <NavLink activeClassName="active-link"  to="/callback">callback</NavLink>
      <NavLink activeClassName="active-link"  to="/memo">memo</NavLink>
      <NavLink activeClassName="active-link"  to="/reducer">reducer</NavLink>
      <NavLink activeClassName="active-link"  to="/impe">impe</NavLink>

      <Route path="/state" component={IntroName} />
      <Route path="/effect" component={SaveName} />
      <UserProvider>
        <Route path="/context" component={TestUseContext} />
      </UserProvider>
      <Route path="/custom" component={FormUseCustomHook} />
      <Route path="/ref" component={FormUseRef} />
      <Route path="/layouteffect" component={Shape} />
      <Route path="/callback" component={WordCallBack} />
      <Route path="/memo" component={Word} />
      <Route path="/reducer" component={AddTodo} />
      <Route path="/impe" component={ImperativeHandle} />

    </Router>
  );
}

export default App;
