import {useEffect, useState} from "react";
import Card from "./card";
import John from './images/john.png';
import Sign from './sign';

const Data = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/account/all')
            .then(response => response.json())
            .then(data => {
                let array = [];
                data.forEach(element => {
                    let obj = {
                        "name"      : element.name,
                        "email"     : element.email,
                        "password"  : element.password,
                        "balance"   : element.balance
                    };
                    array.push(obj);
                })  
                    setUsers(array);
            });
    }, []);

    return (
        <>
        <Sign/>
        {
        users.map((element, index) => {
            return (<Card
            key={index}
            image={John}
            header={element.name}
            body={
                <>
                Client's Email Address: {element.email}<br/>
                Account's Password: {element.password}<br/>
                Account Balance ${element.balance}<br/>
                </>
            }
            />);
        })
        }
        </>      
    );
}

export default Data;
