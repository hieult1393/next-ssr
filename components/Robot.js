import React from 'react';


const containterStyle = {
  width: '200px', height: 'auto',
  padding: '15px',
  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
};

const Robot = ({ robot, showDetail }) => {
  const { name, email, company, phone, address, website } = robot;
  return <div style={containterStyle}>
    <img style={{ width: '80%', height: 'auto' }} src={`https://robohash.org/${name}`} />
    <h3>{name}</h3>

    {
      showDetail ?
        <div>
          <p>Company: {company.name}</p>
          <p>Email: <b>{email}</b></p>
          <p>Address: {address.street}, {address.city}</p>
          <p>Phone: {phone}</p>
          <p>Website: <a target="_blank" href={`http://${website}`}>{website}</a></p>
        </div>
        : null
    }

  </div>
};

export default Robot;