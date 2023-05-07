import './AddNewBlog.scss'
import { useState } from 'react'
import axios from 'axios'

const AddNewBlog = (props) => {
    const  [title, setTitle] = useState('')
    const  [body, setBody] = useState('')

    const handleSubmitBtn = async () => {

        if (!title) {
            alert('Empty title')
            return
        }
        if (!body) {
            alert('Empty body')
            return
        }

        let data = {
            title: title,
            body: body,
            userId: 1,
        }

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)

        if (res && res.data)
        {
            let newBlogs = res.data

            props.handleAddNew(newBlogs)
        }
    }
    return(
        <div className="content-add-new">
            <div className="title-add-new">------Add new Blog-------</div>
            <div className='content-title'>
                <label>Title</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>

            <div  className='content-body'>
                <label>Body</label>
                <input type="text" value={body} onChange={(event) => setBody(event.target.value)}/>
            </div>

            <button className='btn-submit-addnew' onClick={handleSubmitBtn}>Submit</button>
        </div>
    )
}

export default AddNewBlog