import React from 'react';
import fetch from 'isomorphic-unfetch';
import Robot from '../components/Robot';
import Link from 'next/link';

const containterStyle = {
  background: '#009688', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'


};

const RobotProfile = ({ robot }) => <div style={containterStyle}>
  <Robot robot={robot} showDetail={true} />
  <Link href="/robots">
    <a>Back</a>
  </Link>
</div>

RobotProfile.getInitialProps = async function (props) {
  const { query } = props;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`)
  const data = await res.json();
  if (data) {
    return {
      robot: data
    }
  }

  return {};
}

export default RobotProfile;