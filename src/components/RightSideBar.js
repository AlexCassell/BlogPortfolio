import React from 'react'
import ReactDOM from 'react-dom'
import { Treebeard } from 'react-treebeard'

const data = {
  name: 'AlexCassell.com',
  toggled: true,
  children: [
    {
      name: 'blogPosts',
      toggled: true,
      children: [
        {
          name: '2018',
          toggled: true,
          children: [
            {
              name: 'april',
              children: [],
            },
          ],
        },
        // { name: 'child2' },
      ],
    },
    {
      name: 'pages',
      loading: true,
      children: [],
    },
    {
      name: 'projects',
      children: [
        {
          name: 'react',
          children: [],
        },
        {
          name: 'unity',
          children: [],
        },
      ],
    },
  ],
}

class LeftSideBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onToggle = this.onToggle.bind(this)
  }
  onToggle(node, toggled) {
    if (this.state.cursor) {
      this.state.cursor.active = false
    }
    node.active = true
    if (node.children) {
      node.toggled = toggled
    }
    this.setState({ cursor: node })
  }
  render() {
    return (
      <div
        style={{
          position: 'fixed',
          top: `20vh`,
          left: '2vw',
          width: '15vw',
          border: 'solid 2px lightgrey',
          borderRadius: '25px',
          padding: '15px',
          fontSize: '1.2vw',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            borderBottom: 'solid 2px lightgrey',
            fontWeight: 'bold',
          }}
        >
          Directory
        </div>
        <Treebeard data={data} onToggle={this.onToggle} />
      </div>
    )
  }
}
export default LeftSideBar
