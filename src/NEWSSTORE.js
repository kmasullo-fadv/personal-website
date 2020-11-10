import {Link} from 'react-router-dom'

const news = {
    articles: [
        {
            title: "Brand New Site! 11/8/2020",
            content:
                <div className="articleContent">
                    <h2>Welcome!</h2>
                    <p>This site is under construction, so please excuse the 
                        rough edges. Here you will find info about releases, 
                        upcoming shows (once venues are back to normal), side 
                        projects, merchandise, and more. If you are interested in 
                        hiring me to score your next film or game, or if you'd like 
                        to hire me as a session player on your new track, please 
                        contact me through the contact form <Link to='/music/contact' className="articleLink">here</Link>.
                    </p>
                </div>
        },
        // {
        //     title: "New Album Now Available",
        //     content:
        //         <div className="articleContent">
        //             <p>Hello Hi</p>
        //         </div>
        // },
        
    ]
}

export {news};