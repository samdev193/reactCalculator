import logo from './logo.svg';
import './App.css';
import {Planets} from "./Planets";
import {useState} from "react";

function App() {

    const [screen, setScreen] = useState("")
    const [content, setContent] = useState([])


    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++){
            digits.push(<button key={i} onClick={ () => updateScreen(i)}>{i}</button> )
        }
        return digits
    }

    const clearArray = () => {
        setContent([])
    }

    //updates display of screen
    const updateScreen = (number) => {
        // populates array
        // if the button is pressed after "Error" displays
        if (screen === "Error" || screen === ""){
            // empty array
            clearArray()
            setScreen(String(number))
        }

        else {
            content.push(number)
            setScreen(screen + String(content[content.length - 1]) )
        }
    }

    // equals
    const evaluate = () => {
        if (screen === "Error"){
            setScreen("")
        }

        else {
            try {
                setScreen(String(eval(screen)))
            } catch (err) {
                console.log(err.message)
                setScreen("Error")
            }
        }
        // if eval throws an exception, display error and empty array.
    }


    const deleteContent = () => {
        console.log(screen)
        if (screen === "Error" || screen.length === 1){
            clearArray()
            setScreen("")
        }

        else{
            content.pop()
            setScreen(screen.slice(0, screen.length - 1))
            console.log(content)
         }
    }

    return (
        <div className="App">
            <div id="everything">
                <div id="calculator">
                    <div id="screen">{screen || "0"}</div>
                        <div id="operations">
                            <button onClick={ () => {updateScreen("/")}}>/</button>
                            <button onClick={ () => {updateScreen("*")}}>x</button>
                            <button onClick={ () => {updateScreen("-")}}>-</button>
                            <button onClick={ () => {updateScreen("+")}}>+</button>
                            <button onClick={deleteContent}>DEL</button>
                        </div>
                <div id="numbers">
                    {createDigits()}
                    <button onClick={() => {updateScreen(0)}}>0</button>
                    <button onClick={() => {updateScreen(".")}}>.</button>
                    <button onClick={evaluate}>=</button>
                </div>
            </div>
        </div>
    </div>
    );

}
export default App;
