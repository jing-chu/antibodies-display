import { useState } from "react";
import "../styles.css";

export default function SortForm({ fieldsName, data, renderIndex, onRenderIndex }) {

  const [selectField, setSelectField] = useState(fieldsName[0])
  const [sortOption, setSortOption] = useState('ascending')

  function handleSubmit(e) {
    e.preventDefault();
    function getData(i) {
      const item = data[i][selectField]
      if (item === undefined || item === null) {
        return ""
      }
      return item.toUpperCase()
    }
    const copyRenderIndex = renderIndex.slice()
    if (sortOption === 'ascending') {
      copyRenderIndex.sort((a, b) => {
        if (getData(a) < getData(b)) {
          return -1;
        } else if (getData(a) > getData(b)) {
          return 1;
        } else {
          return 0;
        }
      })
    } else {
      copyRenderIndex.sort((a, b) => {
        if (getData(a) < getData(b)) {
          return 1;
        } else if (getData(a) > getData(b)) {
          return -1;
        } else {
          return 0;
        }
      })
    }
    onRenderIndex(copyRenderIndex)
  }

  return (
    <form className="sort-form" onSubmit={handleSubmit}>
      <select value={selectField} onChange={e => { setSelectField(e.target.value) }}>
        {fieldsName.map((field, index) => {
          return <option key={index} value={field}>{field}</option>
        })}
      </select>
      <div>
        <input
          type="radio"
          value="ascending"
          name="sort"
          checked={sortOption === "ascending"}
          onChange={(e) => setSortOption(e.target.value)}
        /> Ascending
        <input
          type="radio"
          value="descending"
          name="sort"
          checked={sortOption === "descending"}
          onChange={(e) => setSortOption(e.target.value)}
        /> Descending
      </div>

      <input type="submit" value="Sort" />
    </form>
  )
}