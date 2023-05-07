import useGet from "../customize/get"
import './Blog.scss'
import BlogDetail from "./BlogDetail"
import { Link, useHistory } from "react-router-dom"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import AddNewBlog from "./AddNewBlog";

const Blog = (props) => {
    let history = useHistory()
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([])
    const {data: dataBlog, isLoading, isError} = useGet(`https://jsonplaceholder.typicode.com/posts`, false)
 

    useEffect(() => {
        if (dataBlog && dataBlog.length > 0)
        {
            let newDataBlog = dataBlog.slice(0, 10)
            setNewData(newDataBlog)
        }
    }, [dataBlog])

    const handleAddNew = (blog) => {
        let data = newData
        data.unshift(blog)
        setShow(false)
        setNewData(data)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const deletePost = (id) => {
        let data = newData
        data = data.filter(item => item.id !== id)
        setNewData(data)
    }
    return(
        <>
                <Button className="my-3" variant="primary" onClick={handleShow}>
                    Add new blog
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewBlog handleAddNew={handleAddNew}/>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            <div className="container-blog">
                {isLoading == false && newData && newData.length > 0 && newData.map((item, index) => {
                return(
                        <div className="one-blog" key={index}>
                            <div className="title-blog">
                                <div style={{cursor: 'pointer'}} onClick={() => deletePost(item.id)}>X</div>
                                <b>Title:</b> {item.title}
                             
                            </div>
                            <div className="content-blog">
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

        </>
    )
}

export default Blog