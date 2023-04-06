function saveUserData() {
  // Get the form inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Create the CSV data
  const data = `${name},${email},${phone}\n`;

  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Set the URL and HTTP method for the request
  const url = "userdata.csv";
  const method = "POST";

  // Open the request
  xhr.open(method, url, true);

  // Set the content type header
  xhr.setRequestHeader("Content-Type", "text/csv");

  // Handle the response
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("User data saved successfully.");
    }
  };

  // Send the request with the CSV data as the payload
  xhr.send(data);
}
