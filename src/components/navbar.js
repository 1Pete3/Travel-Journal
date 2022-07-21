import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
export default function NavBar() {
  return (
    <nav>
      <h2 className="JournalTitle">
        <FontAwesomeIcon icon={faEarthAmerica} className="EarthIcon" />
        My Travel Journal
      </h2>
    </nav>
  );
}
