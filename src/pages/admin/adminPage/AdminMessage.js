
import "./Table.css";

export default function AdminMessage({ msglist }) {
  console.log("msg...", msglist);




  // table component
  const Table = ({ msglist }) => {
    console.log("table...", msglist);
  
    return (
      <>
        <div className="tablee">
          <h1>Message</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                
              </tr>
            </thead>
            <tbody>
              {msglist?.map((msg) => (
                <tr key={msg.id}>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  <td>{msg.phone}</td>
                  <td>{msg.message}</td>
                  
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
        <Table msglist={msglist} />
        {/* <TableComp data={data?.table?.stock?.data} headers={data?.table?.stock?.headers}/> */}
      </div>
    </>
  );
}
