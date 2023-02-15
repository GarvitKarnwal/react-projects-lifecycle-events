import React, { useEffect, useMemo } from "react"
import "../UseMemoComponent/UseMemoComponent.css"

interface IState {
  a: number
  b: number
  A: number
  B: number
}
class UseMemoParentComp extends React.Component<any, IState> {
  constructor(props: any) {
    super(props)
    this.state = { a: 0, b: 0, A: 0, B: 0 }
  }

  render(): React.ReactNode {
    return (
      <>
        <div>
          <div>UseMemoParentComp Content</div>
          <div className="input-container">
            <div>
              <label>a: </label>
              <input
                value={this.state.a}
                onChange={(e) => {
                  let num = Number(e.target.value)
                  if (!Object.is(num, NaN)) {
                    this.setState({ a: num })
                  }
                }}
              ></input>
            </div>
            <div>
              <label>b: </label>
              <input
                value={this.state.b}
                onChange={(e) => {
                  let num = Number(e.target.value)
                  if (!Object.is(num, NaN)) {
                    this.setState({ b: num })
                  }
                }}
              ></input>
            </div>
            <div>
              <button
                onClick={() => {
                  console.log("Multiply button clicked!")
                  this.setState({ A: this.state.a, B: this.state.b })
                }}
              >
                Multiply
              </button>
            </div>
          </div>
          <div>
            <UseMemoComponent
              a={this.state.A}
              b={this.state.B}
            ></UseMemoComponent>
          </div>
        </div>
      </>
    )
  }
}
interface IUseMemoCompProps {
  a: number
  b: number
}
function UseMemoComponent(props: IUseMemoCompProps) {
  const multiply = (a: number, b: number) => {
    console.log(`multiply called! a:${a} | b:${b}`)
    return a * b
  }
  const calcValue = useMemo(
    () => multiply(props.a, props.b),
    [props.a, props.b]
  )
  useEffect(() => {
    console.log("child render called. calcValue:", calcValue)
  })
  return (
    <>
      <div>
        <label>Multiplication Result: </label>
        <span>{calcValue}</span>
      </div>
    </>
  )
}

export default UseMemoParentComp
