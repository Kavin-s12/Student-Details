import Alert from "react-bootstrap/Alert";

const ErrorList = ({ errors }) => {
  return (
    <>
      {errors.map((error, index) => (
        <Alert key={index} variant='danger'>
          {error.path} : {error.msg}
        </Alert>
      ))}
    </>
  );
};

export default ErrorList;
