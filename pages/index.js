import React from 'react';
import Link from 'next/link';

const App = () => {
  return <div>
    <h1>Hello everyone! I'm testing deploy a nextjs app to server. Please do not get angry with me :))</h1>
    <img style={{ width: '200px', height: 'auto' }} src="https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg" />
    <div>
      <Link href="/about">
        <button>About</button>
      </Link>

      <Link href="/robots">
        <button>Robots</button>
      </Link>
    </div>

    {/* <a href="/about">About</a> */}
  </div>
}

export default App;