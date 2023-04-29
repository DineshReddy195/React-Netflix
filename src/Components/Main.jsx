import React, { Component } from 'react'
import './Main.css'

export default class Main extends Component {
  render() {
    return (
      <div className='main'>
        <div className="img">
            <section>
                <h1>Enjoy on your TV</h1>
                <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
            </section>
            <section>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png" alt="" />
            </section>
        </div>
        <div className="img">
            <section>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png" alt="" />
            </section>
            <section>
                <h1>Watch everywhere</h1>
                <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
            </section>
        </div>
        <div className="img">
            <section>
                <h1>Download your shows to watch offline</h1>
                <h3>Save your favourites easily and always have something to watch.</h3>
            </section>
            <section>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png" alt="" />
            </section>
        </div>



      </div>
    )
  }
}