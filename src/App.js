import "./App.css";
import { useEffect, useState } from 'react'

// import Button from "./components/Button";
import Posts from "./components/Posts"

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchJson = () => {
      fetch('/posts/index')
      .then(response => response.json())
      .then(jsonData => {
        setPosts([...posts, jsonData])
      })
    }

    fetchJson()
  }, [])

  return <div className="App">
  <Posts posts={posts}/>

  </div>;
}

export default App;
