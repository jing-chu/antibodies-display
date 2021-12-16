import { useEffect, useState } from "react"
import Table from './components/Table'
import FilterForm from './components/FilterForm'
import SortForm from './components/SortForm'
import axios from 'axios'
import "./styles.css"

function App() {

  const [displayData, setDisplayData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [fields, setFields] = useState([])
  const [renderIndex, setRenderIndex] = useState([])


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

  function getUnionKeys(flattendObjArr) {
    const keySet = new Set()
    for (const obj of flattendObjArr) {
      for (const key in obj) {
        keySet.add(key)
      }
    }
    return [...keySet]
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const result = await axios('https://61b32c95af5ff70017ca1d0a.mockapi.io/api/antibodies')
      const flattenData = result.data.map(antibody => flattenObject(antibody))
      setDisplayData(flattenData)
      setFields(getUnionKeys(flattenData))
      setRenderIndex([...Array(flattenData.length).keys()])
      console.log(flattenData)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const renderData = renderIndex.map(i => displayData[i])

  return (
    <>
      <h1 className="table-name">Antibody Info</h1>
      {
        isLoading ? (<div>Loading...</div>) :
          (
            <>
              <FilterForm fieldsName={fields} data={displayData} renderIndex={renderIndex} onRenderIndex={setRenderIndex} />
              <br />
              <SortForm fieldsName={fields} data={displayData} renderIndex={renderIndex} onRenderIndex={setRenderIndex} />
              <hr />
              <Table data={renderData} fieldsName={fields} />
            </>
          )
      }

    </>
  )
}

export default App;
