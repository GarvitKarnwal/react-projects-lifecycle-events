import "./HOCExample.css"
import React from "react"
class UserComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div>Users</div>
        <div>
          <ul>
            {this.props.data?.map((user, index) => {
              return <li key={index}>{user.name}</li>
            })}
          </ul>
        </div>
      </>
    )
  }
}

class Posts extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <div>Posts</div>
        <div>
          <ul>
            {this.props.data?.slice(0, 10).map((post, index) => {
              return <li key={index}>{post.title}</li>
            })}
          </ul>
        </div>
      </>
    )
  }
}
class HOCExample extends React.Component {
  constructor(props) {
    super(props)
  }
  UsersFromHOC = HOCForUserAndPost({
    component: UserComponent,
    dataType: "Users",
  })
  PostsFromHOC = HOCForUserAndPost({ component: Posts, dataType: "Posts" })

  componentDidMount() {}
  render() {
    return (
      <>
        <div className="higher-order-component-example">
          <h1>HOC Example component</h1>
        </div>
        <div>
          <this.UsersFromHOC></this.UsersFromHOC>
        </div>
        <div>
          <this.PostsFromHOC></this.PostsFromHOC>
        </div>
      </>
    )
  }
}

function HOCForUserAndPost(props) {
  return class HOC extends React.Component {
    constructor() {
      super()
      this.state = { data: [] }
    }
    async getData() {
      let dataResp = await fetch(
        "https://jsonplaceholder.typicode.com/" + props.dataType
      ).catch((err) => {
        console.log(err)
      })
      let data = await dataResp.json()
      console.log(`data`)
      console.log(data)
      this.setState({ data })
    }

    componentDidMount() {
      this.getData()
    }

    render() {
      return (
        <>
          <props.component data={this.state.data}></props.component>
        </>
      )
    }
  }
}

export default HOCExample
