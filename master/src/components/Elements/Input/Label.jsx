import { Children } from "react"

const Label = (props)=> {
  const {htmlFor, Children} = props
  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-700 text-sm font-bold mb-2"
    >
      {Children}
    </label>

  )
}

export default Label