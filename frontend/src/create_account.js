import Card from "./card";
import businessman from "./images/korean_dude.png";
import {useContext, useState} from "react";
import latino from "./images/latino_dude.png";
import {UserContext, AccountContext} from "./index"
import Sign from './sign';
import firebaseConfig from "../../backend/config";

const Account = () => {
    const [show, setShow] = useState(true);
    const [state, setState] = useState(true);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error1, setError1] = useState('');
    const [error, setError] = useState('');
    const ctx = useContext(UserContext);
    const acc = useContext(AccountContext);

    

    const test = () => {
        console.log(firebaseConfig);
    }

    const validate = (data) => {
        if(data === '') {
            setError1('');
            alert('You left an empty field');
            setError1('You left an empty field');
            return false;
        };
        return true;
    }
    const handleSubmit = () => {
        if(!validate(password)) return;
        if(!validate(email)) return;
        if(!validate(name)) return;
        if(password.length < 8) {
            alert('Password must be 8 characters at least')
            setError1('Password too short');
            return;
        };
        setError1('');
        fetch(`http://localhost:3000/account/create/${name}/${email}/${password}`)
        .then((response) => response.json())
        .then((data) => {
            if(data.email){
                setShow(false);
                setEmail('');
                setName('');
                setPassword('');                
            } else {
                setError1('Email already in use');
            }
        });
        
    }
    const clearForm = () => {
        setEmail('');
        setName('');
        setPassword('');
        setShow(true);
    }
    const login = () => {
        setError('Incorrect login data');
        fetch(`http://localhost:3000/account/login/${email}/${password}`)
            .then((response) => response.json())
            .then((data) => {
                acc.account = data.email;
                setState(false);
                setError('');
                ctx.users[0].name = data.name;
                ctx.users[0].email = data.email;
                ctx.users[0].password = data.password;
                ctx.users[0].balance = data.balance;
                clearForm();
            });
    }
    return (
        <>
        <Sign/>
        <Card 
        bgcolor="light"
        image={businessman}
        header="Not a Member? --  Create an Account!"
        error={error1}
        body={show ? 
            (<>
            Name:<br/>
            <input className="form-control" onChange={(e) => setName(e.currentTarget.value)}/><br/>
            Email:<br/>
            <input className="form-control" onChange={(e) => setEmail(e.currentTarget.value)}/><br/>
            Password:<br/>
            <input className="form-control" onChange={(e) => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>Submit</button>
            </>) : 
            (<>
            <h5>Account creation successful!</h5>
            <button type="submit" className="btn btn-secondary" onClick={clearForm}>Add another Account</button>
            </>)}
        />
        <Card
        bgcolor="gray"
        image={latino}
        header="Log into your account"
        body={state ? (<>
            Email:<br/>
            <input className="form-control" onChange={(e) => setEmail(e.currentTarget.value)}/><br/>
            Password:<br/>
            <input className="form-control" onChange={(e) => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-secondary" onClick={login}>Login</button><br/>
            <button type="submit" className="btn btn-secondary" onClick={test}>Login with Google</button>
            </>) :
            (<>
            <h5>Welcome!</h5>
            </>)
            }
        error={error}
        />
        </>
        
    );
}

export default Account;