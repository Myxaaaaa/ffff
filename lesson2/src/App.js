import './App.css';
import Modal from "./Components/modal/Modal";
import {useState} from "react";
import Input from "./Components/input/Input";
import List from "./Components/list/List";
import Button from "./Components/button/Button";
import CountPage from "./pages/CountPage/CountPage";


function App() {
    const [show, setShow]=useState(false)
    const handleShow=()=>setShow(!show)
    const [input, setInput]=useState('')
    const onChangeInput=(event)=>setInput(event.target.value)

    const taskList=[
        {
            id:1 ,
            task: 'coding'
        },
        {
            id:2,
            task: 'eat'
        },
        {
            id:3,
            task: 'sleep'
        }
    ]


  return (
    <div>
        <h1>content</h1>
        <Input placeholder={'name'} type={'text'} onChangeInput={onChangeInput}/>

        {
            show && <Modal handleShow={handleShow}>
                <h1>Content</h1>
            </Modal>
        }
        <Button label={'open'} onClick={handleShow}/>

        <List list={taskList}  />
        <CountPage/>
    </div>
  );
}
export default App;
