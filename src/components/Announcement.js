import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './images/under-construction.png'
import { rhythm } from '../utils/typography'

class Announcement extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Under Construction`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
        <strong>Under Construction</strong> I am currently rebuilding this website with Gatsby/React; you can see my old portfolio at:{' '}
          <a href="https://alexcassell.com/oldPortfolio">
            https://alexcassell.com/oldPortfolio
          </a>
        </p>
      </div>
    )
  }
}

export default Announcement
