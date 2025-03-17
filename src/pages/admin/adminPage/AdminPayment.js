
import "./Table.css";

export default function AdminPayment({ paymentlist }) {
  console.log("plist...", paymentlist);




  // table component
  const Table = ({ paymentlist }) => {
    console.log("table...", paymentlist);
  
    return (
      <>
        <div className="tablee">
          <h1>PaymentDetails</h1>
          <table className="table table-striped">
            <thead>
              <tr>
              <th>ID</th>
              <th>Loan Type</th>
              <th>Applicant Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Loan Amount</th>
              <th>Transaction ID</th>
              <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {paymentlist?.map((plist) => (
                <tr key={plist.id}>
                  <td className="id">{plist.id}</td>
                  <td>{plist.loanType}</td>
                  <td>{plist.name}</td>
                  <td>{plist.contact}</td>
                  <td>{plist.email}</td>
                  <td>{plist.loanAmount}</td>
                  <td>{plist.transaction}</td>
                  <td>{plist.date}</td>
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
        <Table paymentlist={paymentlist} />
        {/* <TableComp data={data?.table?.stock?.data} headers={data?.table?.stock?.headers}/> */}
      </div>
    </>
  );
}
