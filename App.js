import * as React from 'react';
import Header from "./components/header.js";
import './style.sass';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

const data = fetch("https://62ecdb67818ab252b603f9f3.mockapi.io/danhMucNoiBat")
data.then(response => response.json()).then(data => console.log(data))
