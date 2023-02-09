import { useParams } from "react-router-dom"

const Category = () => {
  const param = useParams()
  return (
    <div>
      {param.category}
    </div>
  )
}

export default Category