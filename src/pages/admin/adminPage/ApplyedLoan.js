function ApplyedLoan({ApplyedLoanlist}) {
    console.log("applyedloanlist in db",ApplyedLoanlist);
  return (
    <>
      <h1>user applyed loan in admin page</h1>
      <section>
        <table className="animated-table3">
          <thead>
            <tr>
              <th>table ID</th>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>tableed Date</th>
              <th>Delivery Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ApplyedLoanlist.map((table) => (
              <tr key={table.id}>
                <td>{table.id}</td>
                <td>{table.product}</td>
                <td>{table.price}</td>
                <td>{table.tabledate}</td>
                <td>{table.deliverydate}</td>
                {/* <td className={getStatusClass(table.status)}>{table.status}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
export default ApplyedLoan;
