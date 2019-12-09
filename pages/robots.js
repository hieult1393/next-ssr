import React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Robot from '../components/Robot';

const containerStyle = {
  height: '100vh'
}
const robotsListStyle = {
  height: '300px', display: 'flex', flexWrap: 'wrap',
  flexDirection: 'row', justifyContent: 'flex-start',
}

const robotContentStyle = {
  background: '#009688', color: 'white',
  margin: '4px', border: '1px solid rgba(0,0,0,0.3)', borderRadius: '5px'
};

const Robots = ({ robots }) => {
  return <div style={containerStyle}>
    <div>
      <Link href="/"><a>Back</a></Link>
      <h1 style={{ textAlign: 'center' }}> Robots list</h1>
    </div>

    <div style={robotsListStyle}>
      {
        robots.map((robot) =>
          <Link key={robot.id} href={{ pathname: '/robot-profile', query: { id: robot.id } }}>
            <div style={robotContentStyle}>
              <Robot robot={robot} />
            </div>
          </Link>)
      }

    </div>
  </div >
}

Robots.getInitialProps = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  if (data) {
    return {
      robots: data
    }
  }

  return {};
}

export default Robots;