import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
export default function Location(props) {
  return (
    <div className="location">
      <div class="image">
        <img src={props.x.imageUrl} alt="Location" className="locationImage"></img>
      </div>

      <div className="text">
        <span>
          <p className="locationName">
            <FontAwesomeIcon icon={faLocationDot} className="locationDot" />
            {props.x.location}
          </p>
          <a className="locationMapLink" href={props.x.googleMapsUrl} target="_new">
            View on Google Maps <img src={props.x.flag} alt="Country flag" className="countryFlag"></img>
          </a>
        </span>
        <h1 className="locationTitle">{props.x.title}</h1>
        <p className="date">
          {props.x.startDate} - {props.x.endDate}
        </p>
        <p>{props.x.description}</p>
      </div>
    </div>
  );
}
