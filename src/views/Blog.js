import useGet from "../customize/get"
import './Blog.scss'
import { Link } from "react-router-dom"
import BlogDetail from "./BlogDetail"
const Blog = (props) => {
    const {data: dataBlog, isLoading, isError} = useGet(`https://jsonplaceholder.typicode.com/posts`, false)
    let newDataBlog = []
    if (dataBlog && dataBlog.length > 0)
    {
        newDataBlog = dataBlog.slice(0, 10)
    }
    return(
        <div className="container">
            {isLoading == false && newDataBlog && newDataBlog.length > 0 && newDataBlog.map((item, index) => {
            return(
                    <div className="one-blog" key={index}>
                        <div className="title">
                            <b>Title:</b> {item.title}
                        </div>
                        <div className="content">
                            <b>Body:</b> {item.body}
                        </div>

                        <button>
                            <Link to={`/blog/${item.id}`}> View detail</Link>
                        </button>
                    </div>
                   
            )})}

            {isLoading === true && 
                <div style={{textAlign: 'center', width: '100%'}}>Loading...</div>
            }
        </div>
    )
}

export default Blog