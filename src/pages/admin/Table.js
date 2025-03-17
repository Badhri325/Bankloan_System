import "./Table.css";
function TableComp({ Bloanlist }) {
  console.log("table...", Bloanlist);
  return (
    <>
      <div className="tablee">
        <h1>BusinessLoan </h1>
        <table className="tables">
          <thead>
            <tr>
              <th>Id</th>
              <th>BusinessName</th>
              <th>BusinessType</th>
              <th>BusinessAddress</th>
              <th>BusinessEstablished</th>
              <th>LoanAmount</th>
              <th>LoanPurpose</th>
              <th>OwnerName</th>
              <th>OwnerContact</th>
              <th>OwnerEmail</th>
              <th>OwnerAddress</th>
            </tr>
          </thead>
          <tbody>
            {Bloanlist?.map((bloan, index) => (
              <tr key={bloan.id}>
                <td>{bloan.id}</td>
                <td>{bloan.BusinessName}</td>
                <td>{bloan.BusinessType}</td>
                <td>{bloan.BusinessAddress}</td>
                <td>{bloan.BusinessEstablished}</td>
                <td>{bloan.LoanAmount}</td>
                <td>{bloan.LoanPurpose}</td>
                <td>{bloan.OwnerName}</td>
                <td>{bloan.OwnerContact}</td>
                <td>{bloan.OwnerEmail}</td>
                <td>{bloan.OwnerAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default TableComp;
