
import "../styles.css"

function Header({ headerData }) {
  if (headerData === undefined) {
    return []
  }
  const keys = Object.keys(headerData)
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

function Body({ bodyData }) {
  return bodyData.map((row, index) => {
    return <tr key={index}><Row key={index} objRow={row} /></tr>
  })
}

export default function Table({ data }) {
  return (
    <>
      <table className="antibody-table">
        <thead>
          <tr>
            <Header headerData={data[0]} />
          </tr>
        </thead>
        <tbody>
          <Body bodyData={data} />
        </tbody>
      </table>
    </>
  )
}

