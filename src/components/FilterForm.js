import { useState } from "react";
import "../styles.css";

export default function FilterForm({ fieldsName, data, renderIndex, onRenderIndex }) {

  const [selectField, setSelectField] = useState(fieldsName[0])
  const [filterWord, setFilterWord] = useState('')
  const [filterBtn, setFilterBtn] = useState('Fliter')

  function handleSubmit(e) {
    e.preventDefault();
    const filterIndex = renderIndex.filter(i => data[i][selectField] === filterWord)
    onRenderIndex(filterIndex)
    setFilterBtn('Filter in Results')
  }

  function handleOnClick() {
    onRenderIndex([...Array(data.length).keys()])
    setFilterWord('')
    setSelectField(fieldsName[0])
    setFilterBtn('Filter')
  }


  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <select value={selectField} onChange={e => { setSelectField(e.target.value) }}>
        {fieldsName.map((field, index) => {
          return <option key={index} value={field}>{field}</option>
        })}
      </select>
      <input type="text" name="filterWord" placeholder="filter" value={filterWord} onChange={e => { setFilterWord(e.target.value) }} />
      <input type="submit" value={filterBtn} />
      <input type="button" value="Reset" onClick={handleOnClick} />
    </form>
  )
}