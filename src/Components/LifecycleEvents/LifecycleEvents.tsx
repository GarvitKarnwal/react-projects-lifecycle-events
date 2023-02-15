import React, { memo, useState } from "react"
// interface IParentState {
//   id: number
//   name: string
// }

export default class LifecycleEvents extends React.Component {
  state = { id: 0 }
  render(): React.ReactNode {
    console.log("ParentComp rendered!")
    return (
      <>
        <div>ParentComp Content</div>
        <div>
          <button
            onClick={() => {
              console.log("button clicked!")
              this.setState({ id: 0 })
            }}
          >
            Change State with same value
          </button>
        </div>
      </>
    )
  }
}

function ParentComp() {
  const [stateVar, setStateVar] = useState<any>(0)
  console.log("Parent Rerendered!")
  return (
    <>
      <button
        onClick={() => {
          setStateVar(1) //different value then initial value.
        }}
      >
        Rerender UI
      </button>
    </>
  )
}

function ChildComp() {
  console.log("ChildComp rendered!")
  return (
    <>
      <div>ChildComp Content</div>
    </>
  )
}

// class ParentComponent extends React.Component<any, IParentState> {
//   constructor(props: any) {
//     super(props)
//     this.state = { id: 1, name: "garvit" }
//   }
//   ChildComp = memo(ChildComponent)
//   render(): React.ReactNode {
//     console.log("Parent Rendering!")
//     return (
//       <>
//         <div>
//           <span>Parent Component</span>
//           <button
//             onClick={() => {
//               console.log("Parent Button clicked!")
//               this.setState({ id: 2, name: "ansh" })
//             }}
//           >
//             Change state
//           </button>
//         </div>
//         <div>
//           <this.ChildComp></this.ChildComp>
//         </div>
//       </>
//     )
//   }
// }

// interface IChildState {
//   child_id: number
//   child_name: string
// }
// class ChildComponent extends React.Component<any, IChildState> {
//   constructor(props: any) {
//     super(props)
//     this.state = { child_id: 1, child_name: "garvit" }
//   }

//   render(): React.ReactNode {
//     console.log("Child Rendering!")
//     return (
//       <>
//         <div>
//           <span>Child Component</span>
//           <button
//             onClick={() => {
//               console.log("Child Button clicked!")
//               this.setState({ child_id: 2, child_name: "ansh" })
//             }}
//           >
//             Change state
//           </button>
//         </div>
//       </>
//     )
//   }
// }
// class LifecycleEvents extends React.Component {
//   render() {
//     return (
//       <>
//         <div>
//           <ParentComponent></ParentComponent>
//         </div>
//       </>
//     )
//   }
// }

// export default LifecycleEvents
