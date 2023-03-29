import React, { useState } from "react";
import './Tendertable.css'

function Tendertable() {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);
  const [buttonText, setButtonText] = useState("Archived Tenders");

  const handleButtonClick = () => {
    setShowDiv1(!showDiv1);
    setShowDiv2(!showDiv2);
    setButtonText(showDiv1 ? "Latest Tenders" : "Archived Tenders");
  };
  const [searchDate, setSearchDate] = useState("");

  const handleInputChange = (event) => {
    setSearchDate(event.target.value);
    const input = event.target.value.toLowerCase();
    const rows = document.querySelectorAll("#Names #names tr");

    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      let shouldHide = true;

      cells.forEach((cell) => {
        if (cell.textContent.toLowerCase().includes(input)) {
          shouldHide = false;
        }
      });

      if (shouldHide) {
        row.classList.add("hidden");
      } else {
        row.classList.remove("hidden");
      }
    });
  };


  return (
    <div>
      <button className="togglebtn" onClick={handleButtonClick}>{buttonText}</button>
      {showDiv1 && <div>
        <div id="postedNotices" style={{ height: "600px", overflowY: "scroll" }}>
          <input type="text" id="SearchInput" placeholder="Enter date YYYY-MM-DD" value={searchDate} onChange={handleInputChange} />

          <table>
            <thead>
              <tr>
                <th colspan="3" style={{ textAlign: "center", backgroundColor: "#ffcb00" }}>Latest Tenders</th>
              </tr>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody className="main-wrapper" id="Names">
              <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-27</td>
            <td>Notice 4</td>
            <td>tender 2222</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
            </tbody>
          </table>
        </div></div>}
      {showDiv2 && <div><div id="postedNotices" style={{ height: "600px", overflowY: "scroll" }}>
          <input type="text" id="searchInput" placeholder="Enter date YYYY-MM-DD" value={searchDate} onChange={handleInputChange} />

          <table>
            <thead>
              <tr>
                <th colspan="3" style={{ textAlign: "center", backgroundColor: "#ffcb00" }}>Archived Tenders</th>
              </tr>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody className="main-wrapper" id="names">
              <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
          <tr>
            <td>2023-02-27</td>
            <td>Notice 4</td>
            <td>tender 2222</td>
          </tr>
          <tr>
            <td>2023-02-26</td>
            <td>Notice 3</td>
            <td>Donec varius justo sit amet sapien lobortis consectetur.</td>
          </tr>
            </tbody>
          </table>
        </div></div>}
    </div>
  );
}


export default Tendertable;