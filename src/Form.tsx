import React from 'react'
import './App.css';
import { useState, useRef, useCallback } from 'react';

function Form() {
    const [email, setEmail] = useState("")
    const [inputValue, setInputValue] = useState("")

    const addEmail = useCallback((text: string) => {
        if (text.includes("@" && "com")) {
            setEmail(text)
            setInputValue('')
            alert(`Your Email is ${text}`)
        } if (text === "") {
            return 0
        }

    }, [email])

    return (
        <div className="fyve" >
            <div className='fyve__container'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        addEmail(inputValue)
                    }}>
                    <input
                        type='email'
                        placeholder='Your Email...'
                        value={inputValue}
                        onChange={(event) => {
                            setInputValue(event.target.value)
                        }}
                        required
                        />
                        <button type='submit'>send Email</button>
                </form>
            </div>
        </div>
    )
}

export default Form;
