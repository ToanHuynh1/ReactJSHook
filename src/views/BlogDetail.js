import { useParams, useHistory } from "react-router-dom"
import './BlogDetail.scss'
import useGet from "../customize/get"

const BlogDetail = (props) => {
    let history = useHistory()
    let {id} = useParams()
    const handleBack = () => {
        history.push('/blog')
    }

    let {data: dataDetailBlog, isLoading, isError} = useGet(`https://jsonplaceholder.typicode.com/posts/${id}`, false)

    return(
        <>
            <button className="back" onClick={() => handleBack()}>Back</button>
            <div className="content">
            {dataDetailBlog  && (
                <div className="detail-content">
                    {isLoading == false && (
                    <div>
                        <div style={{marginBottom: '10px', marginTop: '10px'}}>
                            <b>Title:</b>{dataDetailBlog.title}
                        </div>

                        <div>
                            <b>Body:</b>{dataDetailBlog.body}
                        </div>
                    </div>
                    )}

                    {isLoading == true && <div style={{marginTop: '10px'}}>Loading...</div>}
                </div>
            )}
  
            </div>
        </>
    )
}

export default BlogDetail