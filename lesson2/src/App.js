import './App.css';
import Modal from "./Components/modal/Modal";
import {useState} from "react";
import Input from "./Components/input/Input";


function App() {
    const [show, setShow]=useState(false)
    const handleShow=()=>setShow(!show)
    const [input, setInput]=useState('')
    const onChangeInput=(event)=>setInput(event.target.value)

  return (
    <div>
        {
            show && <Modal handleshow={handleShow}>
            <h1>content</h1>
            <Input placeholder={'name'} type={'text'}/>
            </Modal>
        }
        <button onClick={handleShow}>open</button>
    </div>
  );
}

export default App;
