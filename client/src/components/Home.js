import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import FilterForm from "./FilterForm";
import { useParams } from "react-router-dom";
import Paginate from "./Paginate";

const Home = () => {
  const [data, setData] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const { pageNumber = 1 } = useParams();

  const fetchData = async (payload) => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/student/details?pageNumber=${pageNumber}`,
        JSON.stringify(payload),
        config
      );
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNumber]);

  const onSubmit = (payload) => {
    setShowFilter(false);
    fetchData(payload);
  };

  return (
    <Container className='my-4 py-4'>
      <Row className='justify-content-end'>
        <Col xs='auto'>
          <Button className='my-4' onClick={() => setShowFilter(!showFilter)}>
            {showFilter ? "X" : "Filters"}
          </Button>
        </Col>
      </Row>

      {showFilter && <FilterForm onSubmit={onSubmit}></FilterForm>}

      {!showFilter && (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>DOB</th>
                <th>TOTAL MARKS</th>
                <th>PERCENTAGE</th>
                <th>ATTENDENCE</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {data?.details?.map((student) => (
                <tr key={student._id}>
                  <td>{student.student_id}</td>
                  <td>{student.name}</td>
                  <td>{student.date_of_birth.substring(0, 10)}</td>
                  <td>{student.total_marks}</td>

                  <td>{student.percentage}</td>
                  <td>{student.attendance}</td>
                  <td>{student.gender}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={data?.pages} page={data?.page} />
        </>
      )}
    </Container>
  );
};

export default Home;
