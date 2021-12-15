import { useState } from "react";

export default function FilterForm({ fieldsName }) {

  const [selectField, setSelectField] = useState(fieldsName[0])

  function handleSubmit(e) {
    e.preventDefault();

  }

  function handleChange(e) {
    setSelectField(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <select value={selectField} onChange={handleChange}>
        {fieldsName.map((field, index) => {
          return <option key={index} value={field}>{field}</option>
        })}
      </select>
      <input type="text" name="filterWord" />
      <input type="submit" value="Search" />
    </form>
  )
}