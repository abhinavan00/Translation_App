import { useState, useEffect } from "react";
import apiCalls from "./api";

function App() {
  const [apiRes, setApiRes] = useState(null)

  useEffect(() => {
    async function apiResponse() {
      const response = await apiCalls()

      setApiRes(response)
    }

    apiResponse()
  }, [])

  return (
    <main>
      This is React!
      {apiRes}
    </main>
  )
}

export default App
