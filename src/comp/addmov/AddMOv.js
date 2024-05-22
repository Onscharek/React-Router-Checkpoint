import React,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddMOv = ({add}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
        //  initialisation
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [rate, setRate] = useState("");
const [poster, setPoster] = useState("");

                //  update state
 const handleTitle =(e)=> {
  setTitle(e.target.value);
 };

const handleDescription =(e)=> {
  setDescription(e.target.value);
 };

 const handleRate =(e)=> {
  setRate(e.target.value);
 };

 const handlePoster =(e)=> {
  setPoster(e.target.value);
 };
              // func add
    const handleAdd =(e)=>{
      let newMovie ={title,description,rate,poster};
      add(newMovie);
      handleClose();
    };
  


  return (
    <div>
       <Button variant="primary" onClick={handleShow}
          style={{backgroundColor:'rgb(123, 161, 118)',color:'black',borderColor:'black', boxShadow: ' 4px 4px rgba(0, 0, 0, 0.5)',marginRight:'88.5%' ,marginBottom:'1%'}}>
        Add Your Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e)=> handleTitle(e) } />

        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description" value={description} onChange={(e)=> handleDescription(e)}/>

        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" placeholder="Enter rate" value={rate} onChange={(e)=> handleRate(e)} />

        <Form.Label>Poster</Form.Label>
        <Form.Control type="url" placeholder="Enter Poster URl " value={poster} onChange={(e)=> handlePoster(e)}/>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> handleAdd()} 
          style={{backgroundColor:'rgb(123, 161, 118)',color:'black',borderColor:'black', boxShadow: ' 4px 4px rgba(0, 0, 0, 0.5)'}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default AddMOv