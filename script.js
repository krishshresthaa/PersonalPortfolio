
fetch('https://ipapi.co/json/')
.then(response => response.json())
.then(data => {
  const city = data.city; // Assign the value inside the fetch function

  // Now that city is assigned, perform the weather fetch operation
  fetch(`https://api.weatherapi.com/v1/current.json?key=db031d7f8e0241178bc132013232808&q=${city}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      const typedText = `<b>Logged On At</b>:<br>${data.location.localtime} <br><b>From:</b><br>${data.location.name}, ${data.location.country}<br><b>Today's Weather:</b><br>${data.current.condition.text}`;

      // Select the .current-dtw element
      const currentDtwElement = document.querySelector("#current-dtw");

      // Create a new Typed instance for the current-dtw element
      let typedCurrentDtw = new Typed(currentDtwElement, {
        strings: [typedText],
        typeSpeed: 70, // Adjust typing speed as needed
        showCursor: false
      });

    })
    .catch(function (error) {
      console.error("Error fetching weather data:", error);
    });
})
.catch(error => {
  console.error("Error fetching IP geolocation:", error);
});