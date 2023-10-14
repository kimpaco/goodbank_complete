import {UserContext, AccountContext} from "./index"
import {useContext, useState} from "react";
import Card from "./card";
import attendant from "./images/attendant.png"
import Sign from './sign';

const Withdraw = () => {
    const [trans, setTrans] = useState(0);
    const [disable, setDisable] = useState(true);
    const [error, setError] = useState('');
    const [balance, setBalance] = useState(0);
    const ctx = useContext(UserContext);
    const acc = useContext(AccountContext);
    let name = '';

    const validate = (cash) => {
        if(cash > balance) {
           alert('Insufficient funds for this transaction');
           return false; 
        }
        if(cash > 0) {
            return true;
        } else {
            return false;
        }
    }

    const getData = () => {
        name = ctx.users[0].name;
        fetch(`http://localhost:3000/account/login/${ctx.users[0].email}/${ctx.users[0].password}`)
            .then((response) => response.json())
            .then((data)=> {
               setBalance(data.balance);
            });
    };
    getData();

    const transaction = () => {
        if(!validate(trans)) return;
        fetch(`http://localhost:3000/account/update/${acc.account}/-${trans}`)
        .then((response) => response.json())
        .then((data) => {
            getData();
            alert(`Your withdrawal for $${trans} has been successful`);
        }) 
    }
    const handleChange = (event) => {
        
        if(event < 0) {
            setError('Please enter a positive amount');
        } else {
            setDisable(false);
            setError('');
        }
        if(event > balance) {
            setError('Insufficient funds for this transaction');
        }   else {
            setDisable(false);
            
        }
        if(event) {
           setDisable(false); 
           setTrans(event);
        }   else {
            setDisable(true);
        }
        
    }
    
    return (
        <>
        <Sign/>
        <Card
        bgcolor="light"
        image={attendant}
        header="Cash Withdrawal Operations"
        error={error}
        body={<>
        Client's name: {name} <br/>
        Current balance: ${balance} <br/>
        <input type="number" className="form-control" id="transaction" value={trans} onChange={(e) => handleChange(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn btn-secondary" onClick={transaction} disabled={disable}>Withdraw</button>
        </>}
        />
        </>  
    );
}

export default Withdraw;