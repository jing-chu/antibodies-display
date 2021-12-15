
import "../styles.css"

function Header({ headerData }) {

  const keys = Object.keys(headerData[0])
  return keys.map((key) => {
    return <th>{key.toUpperCase()}</th>
  })


}

function Row({ objRow }) {
  const values = Object.values(objRow)
  return values.map((value, index) => {
    return <td>{value}</td>
  })
}

function Body({ bodyData }) {
  return bodyData.map((row, index) => {
    return <tr><Row objRow={row} /></tr>
  })
}

export default function Table({ data }) {
  console.log(data)
  return (
    <>
      <table className="antibody-table">
        <thead>
          <tr>
            {data && <Header headerData={data} />}
          </tr>
        </thead>
        <tbody>
          {data && <Body bodyData={data} />}
        </tbody>
      </table>
    </>
  )
}

