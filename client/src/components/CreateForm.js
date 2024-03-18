import React, { useState } from "react";
import { Badge, Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorList from "./ErrorList";

const CreateForm = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [dob, setDob] = useState("");
  const [total, setTotal] = useState("");
  const [percentage, setPercentage] = useState("");
  const [attendance, setAttendance] = useState("");
  const [gender, setGender] = useState("");

  const [error, setError] = useState([]);

  const navigate = useNavigate();

  const setDefault = () => {
    setName("");
    setDob("");
    setAttendance("");
    setGender("");
    setPercentage("");
    setTotal("");
    setId();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      gender,
      percentage,
      attendance,
      total_marks: total,
      student_id: id,
      date_of_birth: dob,
    };

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    try {
      await axios.post("/student/create", JSON.stringify(payload), config);
      setDefault();
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.errors);
    }
  };

  return (
    <Container className='my-4 py-4'>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='id' className='form-group' md={5}>
          <Form.Label>Student Id</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter student Id'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='name' className='form-group'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='dob' className='form-group'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='date'
            placeholder='DD/MM/YY'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='total' className='form-group'>
          <Form.Label>Total Marks</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter total marks'
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='gender' className='form-group'>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='percentage' className='form-group'>
          <Form.Label>Marks in Percentage</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter marks in percentage'
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='attendance' className='form-group'>
          <Form.Label>Attendance in Percentage</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter attendance in percentage'
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          />
        </Form.Group>

        <Button
          type='submit'
          variant='primary'
          disabled={
            !name || !id || !percentage || !attendance || !gender || !total
          }
        >
          Create
        </Button>
      </Form>
      {error.length > 0 && <ErrorList errors={error} />}
    </Container>
  );
};

export default CreateForm;
