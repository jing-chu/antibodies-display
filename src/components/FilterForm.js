import { useState } from "react";
import "../styles.css";

export default function FilterForm({
  fieldsName,
  data,
  renderIndex,
  onRenderIndex,
  isDisabled,
  onDisabled
}) {

  const [selectField, setSelectField] = useState(fieldsName[0])
  const [filterWord, setFilterWord] = useState('')
  const [filterBtn, setFilterBtn] = useState('Fliter')


  function handleSubmit(e) {
    e.preventDefault();
    const filterIndex = renderIndex.filter(i => {
      const dataValue = data[i][selectField]
      if (dataValue === null || dataValue === undefined) {
        return false
      }
      if (filterWord.startsWith('"') && filterWord.endsWith('"')) {
        return dataValue === filterWord.substring(1, filterWord.length - 1)
      } else {
        return dataValue.toUpperCase().includes(filterWord.toUpperCase())
      }
    })
    onRenderIndex(filterIndex)
    setFilterBtn('Filter in Results')
    onDisabled(false)
  }

  function handleReset() {
    onRenderIndex([...Array(data.length).keys()])
    setFilterWord('')
    setSelectField(fieldsName[0])
    setFilterBtn('Filter')
    onDisabled(true)
  }


  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <select value={selectField} onChange={e => { setSelectField(e.target.value) }}>
        {fieldsName.map((field, index) => {
          return <option key={index} value={field}>{field}</option>
        })}
      </select>
      <input type="text" name="filterWord" placeholder='Use "..." for exact match' value={filterWord} onChange={e => { setFilterWord(e.target.value) }} />
      <input type="submit" value={filterBtn} />
      <input type="button" value="Reset" disabled={isDisabled} onClick={handleReset} />
    </form>
  )
}