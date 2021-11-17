import "./App.css";
// import Button from "./components/Button";
import Data from "./components/Data"

function App() {

  // const fetchJson = () => {
  //   fetch('/posts/index')
  //   .then(response => response.json())
  //   .then(jsonData => {
  //     console.log(jsonData)

  //   })
  // }

  return <div className="App">
    {/* <Button onClick= {fetchJson} /> */}
  <Data />

  </div>;
}

export default App;
