const soap = require("soap");

soap.createClient(
  "http://localhost:8000/products?wsdl",
  {},
  function (err, client) {
    if (err) {
      console.error("Error creating SOAP client:", err);
      return;
    }
    // Make a SOAP request
    client.CreateProduct(
      { name: "My product", about: "1", price: "60" },
      function (err, result) {
        if (err) {
          console.error(
            "Error making SOAP request:",
            err.response.status,
            err.response.statusText,
            err.body
          );
          return;
        }
        console.log("Result:", result);
      }
    );
    client.GetProduct({}, function (err, products) {
      if (err) {
        console.error(
          "Error making SOAP request to get products:",
          err.response.status,
          err.response.statusText,
          err.body
        );
        return;
      }
      console.log("All products:", products);
    });
  }
);