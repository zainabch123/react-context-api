import { useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

export default function App() {
    const [tweets, setTweets] = useState(defaultTweets)

    return (
        <div className="container">
            <Header user={user} />
            <Tweets tweets={tweets} setTweets={setTweets} user={user} />
            <RightSide />
        </div>
    )
}
