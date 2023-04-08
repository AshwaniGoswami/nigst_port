import { AiOutlineFilePdf } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import './geospatial.css'

function Geospatialpolicy() {
  return (
    <div className="geo-special-container">
      <div className="geo-special-main-wrapper">
      <h3>
  <Link to="../assets/National Geospatial Policy.pdf" target="_blank" rel="noopener noreferrer">
    National Geospatial Policy <AiOutlineFilePdf style={{ fontSize: 20, color: 'red', marginLeft: 5 }} />
  </Link>
</h3>
<h3>
  <Link to="../assets/document-49301-New Guidelines on Geospatial Data (1).pdf" target="_blank" rel="noopener noreferrer">
    New Guidelines on Geospatial Data <AiOutlineFilePdf style={{ fontSize: 20, color: 'red', marginLeft: 5 }} />
  </Link>
</h3>
      </div>
    </div>
  );
}
export default Geospatialpolicy;