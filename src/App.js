import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');



    function handleChange(event) {


        setEmail(event.target.value);

    }
let message;
if(email.length<10) {
    message = <div>Masz krótki adres!</div>
}
else if(email.length<15){
    message = <div>Adres jest ok!</div>
}
else {
    message= <div>Adres jest za długi!</div>
}

    return (

        <div>

            <h1>System do zapisów na zajęcia</h1>

            <h2>Twój e-mail to {email}.</h2>
            {message}
            <input value={email}
            type="text"
            onChange={handleChange}
            className="dlpole"/>
            <button onClick={()=>alert()}>Wyślij</button>


        </div>

    );
}

export default App;
