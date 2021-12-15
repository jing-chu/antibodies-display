import { flattedData } from "../mockData";
import "../styles.css"

function Header() {
  const keys = Object.keys(flattedData[0])
  return keys.map((key) => {
    return <th key={key}>{key.toUpperCase()}</th>
  })
}

function Row({ objRow }) {
  const values = Object.values(objRow)
  return values.map((value, index) => {
    return <td key={index}>{value}</td>
  })
}

function Body({ data }) {
  return data.map((row, index) => {
    return <tr key={index}><Row key={index} objRow={row} /></tr>
  })
}

export default function Table() {

  return (
    <>
      <table className="antibody-table">
        <thead>
          <tr>
            <Header />
          </tr>
        </thead>
        <tbody>
          <Body data={flattedData} />
        </tbody>
      </table>
    </>
  )
}

