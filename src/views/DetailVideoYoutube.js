import './DetailVideoYoutube.scss'
import { useParams } from 'react-router-dom'

const DetailVideoYoutube = (props) =>  {
    const { id } = useParams();

    return(
        <div className="video-detail-container">
              <iframe 
                    className='video-detail-ytb'
                    src={`https://www.youtube.com/embed/${id}`} 
                    title="JISOO - ‘꽃(FLOWER)’ DANCE PERFORMANCE VIDEO" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
        </div>
    )
}

export default DetailVideoYoutube