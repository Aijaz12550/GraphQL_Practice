import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Button, Dropdown, ToggleButton } from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Toast = ()=>{
    // toast("This is toast")
toast.success("Success Notification !", {
    position: toast.POSITION.TOP_CENTER
  });

//   toast.error("Error Notification !", {
//     position: toast.POSITION.TOP_LEFT
//   });

  toast.warn("Warning Notification !", {
    position: toast.POSITION.BOTTOM_LEFT
  });

//   toast.info("Info Notification !", {
//     position: toast.POSITION.BOTTOM_CENTER
//   });
}



const Test = ()=>{
    
    const click = (e)=>console.log('event=>',e.target)
        return(
            <div>
          <Button variant="primary" onClick = {()=>Toast()}>Primary</Button>
          <ToastContainer/>

          <Dropdown  >
  <Dropdown.Toggle  variant="success" id="dropdown-basic">
  Select
  </Dropdown.Toggle>

  <Dropdown.Menu onClick={e=>click(e)}>
    <Dropdown.Item href="#/action-1" value="aijaz">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2" value="aijaz">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3" value="aijaz">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </div>
    )

}

export default Test;