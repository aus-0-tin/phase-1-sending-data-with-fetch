// Add your code here
function submitData(name, email){
    const userInput = {
        name: name,
        email: email
    };
    
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(userInput)
      };
  
      return fetch("http://localhost:3000/users", configurationObject)
        .then(res => res.json())
        .then(data => {
          document.body.innerHTML += `<p>User ID: ${data.id}</p>`;
        })
        .catch(error => {
          document.body.innerHTML += `<p>Error: ${error.message}</p>`;
        });

    }
    submitData("Moya Wizi", "moyawizi@gmail.com");




