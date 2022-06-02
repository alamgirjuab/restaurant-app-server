module.exports = ({ cartTotal, items }) => {
  const { name, quantity, price, itemTotal } = items[0];
  return `
    <!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- CSS only -->
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
          <title>PDF Resume Template</title>
          <style>
            .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
          </style>
       </head>
       <body class="invoice-box">
          <div className="container">
            <div className="text-center">
               <h4>Invoice</h4>
               <h3>ThumbStack Restaurant</h3>
               <p>Pabna, Dhaka, Bangladesh</p>
               <p>
                  <strong>Mobile no:</strong> +880 1822 77 35 41
               </p>
            </div>
            <div className="d-flex justify-content-around">
               <p>
                  Invoice No:<strong>10</strong>
               </p>
               <p>Date : </p>
            </div>
            <div>
               <table class="table table-sm">
                  <thead>
                     <tr>
                     <th>#</th>
                     <th>Item Name</th>
                     <th>Qty.</th>
                     <th>Rate</th>
                     <th>Amount</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>${name}</td>
                        <td>${quantity}</td>
                        <td>${price}</td>
                        <td>${itemTotal}</td>
                     </tr>
                     <tr>
                        <td colspan="4" className="text-right pe-3">
                           Sub-Total :
                        </td>
                        <td>${cartTotal}</td>
                     </tr>
                     <tr>
                        <td colspan="4" className="text-right pe-3">
                           Tips (10%) :
                        </td>
                        <td>${cartTotal / 10}</td>
                     </tr>
                     <tr>
                        <td colspan="4" className="text-right pe-3">
                           Total :
                        </td>
                        <td>${cartTotal / 10 + cartTotal}</td>
                     </tr>
                  </tbody>
               </table>
               <div className="text-center my-5">
                  <h4>Thank you, visit again</h4>
               </div>
            </div>
         </div>
       </body>
    </html>
    `;
};
