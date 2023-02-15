import React, {
  memo,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react"

interface IChildComp {
  consoleFunc: MouseEventHandler<HTMLButtonElement>
}

function ChildComp(params: IChildComp) {
  useEffect(() => {
    console.log("ChildComp rendered!")
  })
  useEffect(() => {
    console.log("ChildComp Mounted!")
  }, [])
  return (
    <>
      <div>ChildComp content</div>
      <button onClick={params.consoleFunc}>Log</button>
    </>
  )
}
const ChildCompMemo = memo(ChildComp)

export default function UseCallbackComp() {
  const [stateVar1, setStateVar1] = useState(0)
  const [stateVar2, setStateVar2] = useState(0)
  const [stateVar3, setStateVar3] = useState(0)
  const logFunc = useCallback(() => {
    console.log(`logFunc called! StateVar2:${stateVar2}`)
  }, [stateVar2, stateVar3])

  useEffect(() => {
    console.log("UseCallbackComp rendered!")
  })
  return (
    <>
      <div>UseCallbackComp content</div>
      <div>
        <span>StateVar1:${stateVar1} </span>
        <button
          onClick={() => {
            console.log("Change StateVar1 button clicked!")
            setStateVar1(stateVar1 + 1)
          }}
        >
          Change StateVar1
        </button>
      </div>
      <div>
        <span>StateVar2:${stateVar2} </span>
        <button
          onClick={() => {
            console.log("Change StateVar2 button clicked!")
            setStateVar2(stateVar2 + 1)
          }}
        >
          Change StateVar2
        </button>
      </div>
      <div>
        <span>StateVar3:${stateVar3} </span>
        <button
          onClick={() => {
            console.log("Change StateVar3 button clicked!")
            setStateVar3(stateVar3 + 1)
          }}
        >
          Change StateVar3
        </button>
      </div>
      <ChildCompMemo consoleFunc={logFunc}></ChildCompMemo>
    </>
  )
}
