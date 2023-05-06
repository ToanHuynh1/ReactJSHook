import { useParams } from "react-router-dom"

const BlogDetail = (props) => {
    let {id} = useParams()
    return(
        <h1>Id = {id}</h1>
    )
}

export default BlogDetail