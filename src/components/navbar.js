import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
export default function NavBar() {
  return (
    <nav className='bg-danger p-1'>
      <h2 className="text-center text-light">
        <FontAwesomeIcon icon={faEarthAmerica}/>
        &nbsp;
        My Travel Journal
      </h2>
    </nav>
  );
}
