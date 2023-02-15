import React, { useEffect, useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Dashboard from "./Components/Component4/Component4"
import Ref_Snippets, {
  Counter,
  Ref_Component_Self,
} from "./Components/Ref_Snippets/Ref_Snippets"
import Component4 from "./Components/Component4/Component4"
import Ref_Comp from "./Components/Ref_Comp"
import HOCExample from "./Components/HigherOrderComponentExample/HOCExample"
import GetDerivedStateFromPropsComponent from "./Components/GetDerivedStateFromPropsComponent"
import LifecycleEvents from "./Components/LifecycleEvents/LifecycleEvents"
import UseMemoParentComp from "./Components/UseMemoComponent/UseMemoComponent"
import UseCallbackComp from "./Components/UseCallbackComp"
import StateChangeComp from "./Components/UseCallbackComp"
import ParentFC from "./Components/UseCallbackComp"
function App() {
  return (
    <>
      <div className="App">
        {/* <UseCallbackComp></UseCallbackComp> */}
        {/* <StateChangeComp></StateChangeComp> */}
        {/* <UseMemoParentComp></UseMemoParentComp> */}
        <LifecycleEvents></LifecycleEvents>
        {/* <GetDerivedStateFromPropsComponent
          userId={"234"}
          email={"garvit@garvit.com"}
        ></GetDerivedStateFromPropsComponent> */}
        {/* <HOCExample></HOCExample> */}
        {/* <button
          onClick={() => {
            console.log("button clicked")
            setUserId("2323")
            setEmail("khaskd@akjsdhkla.com")
          }}
        >
          Change state
        </button> */}
      </div>
    </>
  )
}

export default App
