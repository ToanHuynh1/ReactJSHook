import { useHistory } from "react-router-dom"

const NotFound = (props) => {
    let history = useHistory()
    const HandleSwitchHome = () => {
    
        history.push('/')
    }
    return(
        <div className="not-found-container" style={{marginTop: '20px'}}>
            <h4>This Page Isn't Available</h4>
            <button style={{marginTop: '50px'}} className="btn btn-primary" onClick={() => HandleSwitchHome()}>Go to HomePage</button>
        </div>
    )
}

export default NotFound