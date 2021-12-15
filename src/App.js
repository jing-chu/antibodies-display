import { useEffect, useState } from "react"
import Table from './components/Table'
import axios from 'axios'
import "./styles.css"

function App() {

  const [displayData, setDisplayData] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  function flattenObject(nestObj) {
    const flattendObj = {};
    const nestedObject = (obj, keyName) => {
      Object.keys(obj).forEach(key => {
        let newKey = keyName === '' ? key : `${keyName}_${key}`
        if (obj[key] !== null && typeof obj[key] === "object") {
          // calling the function again
          nestedObject(obj[key], newKey);
        } else if (key !== 'id' && !newKey.endsWith('_id')) {
          flattendObj[newKey] = obj[key];
        }
      });
    };
    nestedObject(nestObj, '');
    return flattendObj;
  }

  // const fetchData = () => {
  //   return fetch("https://61b32c95af5ff70017ca1d0a.mockapi.io/api/antibodies")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const flattenData = data.map(antibody => flattenObject(antibody))
  //       console.log(flattenData)
  //       setDisplayData(flattenData)
  //     })
  // }


  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true)
      const result = await axios('https://61b32c95af5ff70017ca1d0a.mockapi.io/api/antibodies')
      const flattenData = result.data.map(antibody => flattenObject(antibody))
      console.log(flattenData)
      setDisplayData(flattenData)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <>
      <h1 className="table-name">Antibody Info</h1>
      {
        isLoading ? (<div>Loading...</div>) :
          (<Table data={displayData} />)
      }

    </>
  )
}
//   
export default App;
