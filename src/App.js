import logo from './logo.svg';
import './App.css';
//import proxyserver from 'server.js'; // this will not work off of my computer

function App() {
  var data = proxyRequest()
  
  return (
       <div>

       </div>
  );
}

async function proxyRequest() {
  // Specify the API endpoint for user data
const apiUrl = 'http://localhost:3001';

// Make a GET request using the Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    // Process the retrieved user data
    console.log('User Data:', userData);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

export default App;
