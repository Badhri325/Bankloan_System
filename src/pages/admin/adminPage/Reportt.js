
import "./Table.css";

export default function Report({ Reportlist }) {
  console.log("rlist...", Reportlist);




  // table component
  const Table = ({ Reportlist }) => {
    console.log("table...", Reportlist);
  
    return (
      <>
        <div className="tablee">
          <h1>Report</h1>
          <table className="tables">
            <thead>
              <tr>
              <th>ID</th>
              <th>Loan Type</th>
              <th>Applicant Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Loan Amount</th>
              <th>Reason</th>
              <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {Reportlist?.map((rlist) => (
                <tr key={rlist.id}>
                  <td className="id">{rlist.id}</td>
                  <td>{rlist.loanType}</td>
                  <td>{rlist.name}</td>
                  <td>{rlist.contact}</td>
                  <td>{rlist.email}</td>
                  <td>{rlist.loanAmount}</td>
                  <td>{rlist.reason}</td>
                  <td>{rlist.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  



  return (
    <>
      <div style={{padding:"10px"}}>
        <Table Reportlist={Reportlist} />
        {/* <TableComp data={data?.table?.stock?.data} headers={data?.table?.stock?.headers}/> */}
      </div>
    </>
  );
}
