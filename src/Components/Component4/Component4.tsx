import React from "react";
import './Component4.css';
class Dashboard extends React.Component<any, any> {
    refFullName = React.createRef<HTMLInputElement>();
    inputRef = React.createRef<HTMLInputElement>();
    constructor(props: any) {
        super(props);
        this.state = {
            isToggleOn: true,
            toggleValue: "true",
            fullName: ""
        }
        // this.updateToggle = this.updateToggle.bind(this);
        this.focusClickHandler = this.focusClickHandler.bind(this);
    }
    updateToggle() {
        if (this.state.isToggleOn)
            this.setState({ isToggleOn: false, toggleValue: "false" });
        else
            this.setState({ isToggleOn: true, toggleValue: "true" });
        throw new Error("my error");

    };
    componentDidMount() {
        console.log("Component did mount called")
    }
    componentDidUpdate(props:any, state:any){
        alert("componentDidUpdate called");
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("componentDidCatch called")
    }
    focusClickHandler(){
        this.inputRef?.current?.focus();
    }
    render() {
        return (<>
            <div>
                <input ref={this.inputRef}></input> <button onClick={this.focusClickHandler}>Focus on textbox</button>
            </div><hr></hr>
            <h1 className="redPen">Hello from Dashboard</h1>
            <input id="txtFName" ref={this.refFullName}></input>
            <button onClick={() => {
                this.setState({ fullName: this.refFullName.current?.value })
                if (this.refFullName.current)
                    this.refFullName.current.value = "custom name";

            }}>See Fullname</button>
            <br></br><br></br><br></br>
            <label id="lblFname" >{this.state.fullName}</label>
            <hr></hr>
            <p>{this.state.toggleValue}</p>
            <button onClick={() => { this.updateToggle() }}>Click me</button>
        </>);
    }
}

export default Dashboard;
