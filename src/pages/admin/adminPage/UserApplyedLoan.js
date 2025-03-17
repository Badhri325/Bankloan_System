import "./UserApplyedLoan.css";
function UserApplyedLoan() {
  return (
    <>
      <h1>UserApplyedLoan</h1>

      <section className="userapplyedloan">
        {/* businessloan */}
        <div>
          <table border="1" className="tables">
            <h3>BusinessLoan</h3>
            <tr>
              <th>BusinessName</th>
              <td>TeaShop with a Small Hotel</td>
            </tr>
            <tr>
              <th>BusinessType</th>
              <td>TeaShop</td>
            </tr>
            <tr>
              <th>BusinessAddress</th>
              <td>Ettimadai,Coimbatore</td>
            </tr>
            <tr>
              <th>businessEstablished</th>
              <td>2nd Branck of TeaShop</td>
            </tr>
            <tr>
              <th>LoanAmount</th>
              <td>100000</td>
            </tr>
            <tr>
              <th>LoanPurpose</th>
              <td>Business Expansion</td>
            </tr>
            <tr>
              <th>ownerName</th>
              <td>Tamil</td>
            </tr>
            <tr>
              <th>ownerContact</th>
              <td>9159552150</td>
            </tr>
            <tr>
              <th>ownerEmail</th>
              <td>tamil@gmail.com</td>
            </tr>
            <tr>
              <th>ownerAddress</th>
              <td>Ettimadai, coimbatore</td>
            </tr>
          </table>
        </div>

        {/* educationloan */}
        <div>
          <table border="1" className="tables">
            <h3>EducationLoan</h3>
            <tbody>
              <tr>
                <th>courseName</th>
                <td>Computer Science</td>
              </tr>
              <tr>
                <th>instituteName</th>
                <td>PSG University</td>
              </tr>
              <tr>
                <th>instituteAddress</th>
                <td>123 Main St, Coimbatore</td>
              </tr>
              <tr>
                <th>courseDuration</th>
                <td>4 Years</td>
              </tr>
              <tr>
                <th>loanAmount</th>
                <td>500000</td>
              </tr>
              <tr>
                <th>loanPurpose</th>
                <td>Higher Education</td>
              </tr>
              <tr>
                <th>studentName</th>
                <td>Avinash</td>
              </tr>
              <tr>
                <th>studentContact</th>
                <td>9834545910</td>
              </tr>
              <tr>
                <th>studentEmail</th>
                <td>avinash@gmail.com</td>
              </tr>
              <tr>
                <th>studentAddress</th>
                <td>456 Elm St, Coimbatore</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* agricultureloan */}
        <div>
          <table border="1" className="tables">
            <h3>AgricultureLoan</h3>
            <tbody>
              <tr>
                <th>farmName</th>
                <td>Green Valley Farm</td>
              </tr>
              <tr>
                <th>farmSize</th>
                <td>50 Acres</td>
              </tr>
              <tr>
                <th>cropType</th>
                <td>Paddy</td>
              </tr>
              <tr>
                <th>location</th>
                <td>Thanjavur, Tamil Nadu</td>
              </tr>
              <tr>
                <th>loanAmount</th>
                <td>200000</td>
              </tr>
              <tr>
                <th>loanPurpose</th>
                <td>Purchase of farming equipment</td>
              </tr>
              <tr>
                <th>farmerName</th>
                <td>Arun Kumar</td>
              </tr>
              <tr>
                <th>farmerContact</th>
                <td>9876543210</td>
              </tr>
              <tr>
                <th>farmerEmail</th>
                <td>arunfarmer@gmail.com</td>
              </tr>
              <tr>
                <th>farmerAddress</th>
                <td> Thanjavur, Tamil Nadu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
export default UserApplyedLoan;
