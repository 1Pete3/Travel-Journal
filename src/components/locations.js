import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Location(props) {
  return (
    <Container>
      <Row className="my-3 border-bottom border-danger border-2">
        <Col sm={12} lg={6}  className=" d-flex align-items-center justify-content-center">
          <img src={props.x.imageUrl} alt="Location" className="w-75"></img>
        </Col>
        <Col sm={12} lg={6} className="p-3 text-center">
            <p className="text-uppercase">
              <FontAwesomeIcon icon={faLocationDot} className="text-danger" /> &nbsp;
              {props.x.location} 
            </p>
            <a href={props.x.googleMapsUrl} target="_new">
              View on Google Maps
            </a>
            &nbsp;
            <img
              src={props.x.flag}
              alt="Country flag"
              className="countryFlag
"
            ></img>
         
          <h1>{props.x.title}</h1>
          <p>
            {props.x.startDate} - {props.x.endDate}
          </p>
          <p>{props.x.description}</p>
        </Col>
      </Row>
    </Container>
  );
}
