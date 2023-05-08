import './SearchYoutube.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import moment from 'moment'

const SearchYoutube = (props) => {
    const [video, setVideo] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        
    }, [])

    const handleSearch = async () => {
        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params":{
                'part': 'snippet',
                'maxResults':'20',
                'key':'AIzaSyD0fEhh_WqmfzDDWjr86FahN1xayc44jvc',
                'q':query
            }
        })

        if (res && res.data && res.data.items){
            let raw = res.data.items
            let result = []
            if (raw && raw.length > 0){
                raw.map(item => {
                    let object = {}
                    object.id = item.id.videoId
                    object.title = item.snippet.title
                    object.createdAt = item.snippet.publishedAt
                    object.author = item.snippet.channelTitle
                    object.des = item.snippet.description

                    result.push(object)
                })
            }

            setVideo(result)
        }
    }

    return(
        <div className="youtube-search-container">
            <div className="yt-search">
                <input placeholder='Search...' type='text' 
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                />
                <i className="fas fa-search" onClick={() => handleSearch()}></i>
            </div>

            {video && video.length > 0 && video.map(item => {
                return(
                <div className='ytb-result' key={item.id}>
                    <div className='left'>
                        <iframe 
                            className='video-ytb'
                            src={`https://www.youtube.com/embed/${item.id}`} 
                            title="JISOO - ‘꽃(FLOWER)’ DANCE PERFORMANCE VIDEO" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>

                        </iframe>
                    </div>

                    <div className='right'>
                        <div className='title'>
                            {item.title}
                        </div>

                        <div className='created-at'>
                            created At: {moment(item.createdAt).format('DD-MM-YYYY HH:mm:ss A')}
                        </div>

                        <div className='author'>
                            Author: {item.author}
                        </div>

                        <div className='des'>
                            {item.des}
                        </div>
                </div>
            
            </div>
                )
            })}
            
        </div>
    )
}

export default SearchYoutube