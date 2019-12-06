import React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Robots = ({ robots }) => {
  return <div>

    <h1>Robots page</h1>

    <ul style={{ listStyle: 'none' }}>
      {
        robots.map((robot) => <li style={{ padding: '5px' }} key={robot.id}>
          <Link href={`robots/${robot.id}`}>
            <a>{robot.name}</a>
          </Link>
        </li>)
      }

    </ul>
  </div>
}

Robots.getInitialProps = async function (props) {
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