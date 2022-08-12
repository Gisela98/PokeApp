import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { input } from '../store/slices/userName.slice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const LogIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")

    const submit = (e) => {
        e.preventDefault()
        dispatch(input(userName))
        navigate("/pokedex")
    }

    return (
        <div className='logIn'>
            <h2>Hello Trainer!</h2>
            <h4>to start, give me your name</h4>
            <form onSubmit={submit}>
                <label htmlFor="userName">
                    <input type="text" id="userName" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                </label>
                <button type='submit'>Sign In</button>
            </form>
        </div>
    );
};

export default LogIn;