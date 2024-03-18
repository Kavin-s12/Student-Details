import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((no) => (
          <LinkContainer to={`/pageNumber/${no + 1}`} key={no + 1}>
            <Pagination.Item active={no + 1 === page}>{no + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
