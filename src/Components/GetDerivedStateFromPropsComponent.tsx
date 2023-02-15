import React from "react"
interface IProps {
  userId: string
  email: string
}
interface IState {
  userId: string
  email: string
}
class GetDerivedStateFromPropsComponent extends React.Component<
  IProps,
  IState
> {
  constructor(props: any) {
    super(props)
    this.state = { userId: this.props.userId, email: this.props.email }
  }

  static getDerivedStateFromProps(props: IProps, state: IState) {
    if (props.email !== state.email) {
      return { email: props.email } // changes only email.
    }
    return null // No change to state
  }

  render() {
    console.log("GetDerivedStateFromPropsComponent rerender Called")
    console.log("props:", this.props)
    console.log("state:", this.state)
    return (
      <>
        <div>GetDerivedStateFromProps Component</div>
      </>
    )
  }
}
export default GetDerivedStateFromPropsComponent
