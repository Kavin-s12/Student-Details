import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const initialState = {
  name: "",
  gender: "",
  date_of_birth_min: "",
  date_of_birth_max: "",
  total_marks_min: "",
  total_marks_max: "",
  percentage_min: "",
  percentage_max: "",
  attendance_min: "",
  attendance_max: "",
};

const FilterForm = ({ onSubmit }) => {
  const [filters, setFilters] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: filters.name,
      gender: filters.gender,
      date_of_birth: {
        min: filters.date_of_birth_min,
        max: filters.date_of_birth_max,
      },
      percentage: {
        min: filters.percentage_min,
        max: filters.percentage_max,
      },
      attendance: {
        min: filters.attendance_min,
        max: filters.attendance_max,
      },
      total_marks: {
        min: filters.total_marks_min,
        max: filters.total_marks_max,
      },
    };

    setFilters(initialState);

    onSubmit(payload);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={filters.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId='gender'>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type='text'
            name='gender'
            value={filters.gender}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId='date_of_birth'>
          <Form.Label>Date of Birth (Range)</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type='date'
                name='date_of_birth_min'
                value={filters.date_of_birth_min}
                onChange={handleChange}
                placeholder='From'
              />
            </Col>
            <Col>
              <Form.Control
                type='date'
                name='date_of_birth_max'
                value={filters.date_of_birth_max}
                onChange={handleChange}
                placeholder='To'
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId='total_marks'>
          <Form.Label>Total Marks (Range)</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type='number'
                name='total_marks_min'
                value={filters.total_marks_min}
                onChange={handleChange}
                placeholder='From'
              />
            </Col>
            <Col>
              <Form.Control
                type='number'
                name='total_marks_max'
                value={filters.total_marks_max}
                onChange={handleChange}
                placeholder='To'
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId='percentage'>
          <Form.Label>Percentage (Range)</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type='number'
                name='percentage_min'
                value={filters.percentage_min}
                onChange={handleChange}
                placeholder='From'
              />
            </Col>
            <Col>
              <Form.Control
                type='number'
                name='percentage_max'
                value={filters.percentage_max}
                onChange={handleChange}
                placeholder='To'
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId='attendance'>
          <Form.Label>Attendance (Range)</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type='number'
                name='attendance_min'
                value={filters.attendance_min}
                onChange={handleChange}
                placeholder='From'
              />
            </Col>
            <Col>
              <Form.Control
                type='number'
                name='attendance_max'
                value={filters.attendance_max}
                onChange={handleChange}
                placeholder='To'
              />
            </Col>
          </Row>
        </Form.Group>

        <Button className='my-4' type='submit' variant='primary'>
          Apply Filters
        </Button>
      </Form>
    </Container>
  );
};

export default FilterForm;
