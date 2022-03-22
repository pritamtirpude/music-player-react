import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isLibraryOpened, setIsLibraryOpened }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setIsLibraryOpened(!isLibraryOpened)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
