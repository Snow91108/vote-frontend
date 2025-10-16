import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App1 from "./App1.jsx";
import App2 from "./App2.jsx";
import App3 from "./App3.jsx";
import Parent from "./Parent.jsx";
import Child1 from "./components/Child1.jsx"
import Child2 from "./components/Child2.jsx"
import ComponentA from "./ComponentA";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> *}
    
    {/* <App2 /> */}
    {/* <App3 /> */}
       {/* <Parent />
      <App1 />  */}
      {/* <Child1 /> */}
      {/* <Child2 /> */}
      {/* <Parent /> */}
      <ComponentA />

  </StrictMode>,
)
