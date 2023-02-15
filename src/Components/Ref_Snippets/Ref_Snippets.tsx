import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { flushSync } from "react-dom";


const MyInputs = forwardRef((props, ref) => {
    const realInputRef = useRef<any>(null);
    useImperativeHandle(ref, () => ({
        // Only expose focus and nothing else
        focus() {
            realInputRef.current.focus();
        },
        setValue(val: string) { realInputRef.current.value = val; }
    }));
    return <input {...props} ref={realInputRef} />;
});


    
export function Counter() {
    const [show, setShow] = useState(true);
    const ref = useRef<any>(null);  
    return (
      <div>
        <button
          onClick={() => {
            setShow(!show);
          }}>
          Toggle with setState
        </button>
        <button
          onClick={() => {
            ref.current.remove();
          }}>
          Remove from the DOM
        </button>
        {show && <p ref={ref}>Hello world</p>}
      </div>
    );
  }
  

export function Ref_Component_Self(props: any) {
    const [stateVar, setStateVar] = useState(0);
    return (<>
        {console.log("render called")}
        <div>
            <span>StateVar value:{stateVar}</span>
            <div>
                <button onClick={() => {
                    console.log("Sync Update button clicked!")
                    flushSync(() => {
                        console.log("flushSync called!")
                        setStateVar(10);
                        console.log("flushSync ended!")
                    });
                    console.log("End of button click!")
                    console.log("______________________________________________________")
                }}>Synch Update </button>

                <button style={{ marginLeft: 10 }} onClick={() => {
                    console.log("Async Update button clicked!")
                    setStateVar(100);
                    console.log("End of button click!")
                    console.log("______________________________________________________")
                }}>Async Update</button>
            </div>

        </div>
    </>);
}
const MyInput = forwardRef((props: any, refVar: any) => {
    return <div>
        <div>This is MyInput Component</div>
        <input {...props} ref={refVar} />
    </div>;
});

function Ref_Snippets(props: any) {
    let refClickCount = useRef(0);
    let ref_MyInput = useRef<any>(null);
    let interValId = useRef<number>();
    let [noReRenderVar, unused] = useState(0);
    const [timePassed, setTimePassed] = useState("0.000")
    const [stateVar, setStateVar] = useState(0);
    let timerToggle = useRef(false);
    const [timerButtonText, setTimerButtonText] = useState("Start");
    let inputRef = useRef<any>(null);
    let nonRefVar = 0;
    const handleTimerToggle = (toggle: boolean) => {
        if (toggle) {
            let startTime = new Date();
            clearInterval(interValId.current);
            interValId.current = window.setInterval(() => {
                let timeNow = (new Date());
                setTimePassed(((+timeNow - +startTime) / 1000).toFixed(3));
            }, 1)
        }
        else {
            clearInterval(interValId.current);
        }
        timerToggle.current = toggle;
        setTimerButtonText(toggle ? "Stop" : "Start");
    }

    const handleStop = () => {

    }
    function componentDidUpdate(props: any, state: any) {
        console.log("componentDidUpdate called.");
        console.log(`value of state is: ${state}`)
    }
    const handleFocusClick = () => {
        inputRef.current.focus();
    }
    return (<>
        <div>

            <button onClick={() => {
                if (!ref_MyInput.current) {
                    console.log("ref_MyInput.current is empty")
                }
                ref_MyInput.current?.focus();
            }}>Focus</button>
        </div>
        <div>
            <input ref={inputRef}></input> <button onClick={handleFocusClick}>Focus on Text Box</button>
        </div>
        <hr></hr>
        <div>
            if(!refClickCount.current){
                refClickCount.current = 1
            }
        </div>
        <div>
            <span>Value of no re-render variable: {noReRenderVar}</span>
            <button onClick={() => {
                noReRenderVar = noReRenderVar + 1;
                console.log(`actual value of noReRenderVar: ${noReRenderVar}`)
            }}>Change noReRenderVar</button>
        </div>
        <hr></hr>
        <div>Welcome to Ref_Snippets component</div>
        <br></br>
        <button onClick={() => {
            refClickCount.current += 1;
            nonRefVar += 1;
            setStateVar(stateVar + 1);
            console.log(`Click Count with Ref Var: ${refClickCount.current}`)
            console.log(`Click Count with Non Ref Var : ${nonRefVar}`)
            console.log(`Click Count with state Var : ${stateVar}`)

        }}>Click Me!</button>
        <hr></hr>
        <div style={{ marginTop: 30 }}>
            <span>{timePassed}</span>
            <br></br>
            <button onClick={() => { handleTimerToggle(!timerToggle.current) }}>{timerButtonText}</button>
        </div>
    </>)
}

export default Ref_Snippets;