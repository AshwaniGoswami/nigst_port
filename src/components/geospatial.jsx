import { AiOutlineFilePdf } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import './geospatial.css'

function Geospatialpolicy() {
  return (
    <div className="geo-special-main-wrapper">
  <h4>Geo-Spatial Policy</h4>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Attachments</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><h3>National Geo-Spatial Policy 2022</h3></td>
        <td>
          <h3>
            <Link to="../assests/National Geospatial Policy.pdf" target="_blank" rel="noreferrer">
            <AiOutlineFilePdf style={{ fontSize: 20, color: 'red', marginLeft: 5 }} />
            </Link>
          </h3>
        </td>
      </tr>
      <tr>
        <td className="color-td">
          <h3>New Geo-Spatial Data Guidelines 2021</h3>
        </td>
        <td className="color-td">
          <h3>
            <Link to="../assests/document-49301-New Guidelines on Geospatial Data (1).pdf" target="_blank" rel="noreferrer">
            <AiOutlineFilePdf style={{ fontSize: 20, color: 'red', marginLeft: 5 }} />
            </Link>
          </h3>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  );
}
export default Geospatialpolicy;