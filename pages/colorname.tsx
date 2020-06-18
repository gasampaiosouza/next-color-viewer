import Layout from '../components/Layout';
import { useState } from 'react';

import { Message } from 'semantic-ui-react';

const colorName = () => {
  const [colorName, setColorName] = useState('');
  const [color, setColor] = useState({
    color: '',
    error: false,
  });

  let timer: number;

  function getData(value: string) {
    const time = 1000;
    clearTimeout(timer);

    timer = window.setTimeout(() => {
      if (value.match(/[0-9a-fA-F]+/)) {
        setColor({
          ...color,
          color: `#${value}`,
        });

        fetch(`https://www.thecolorapi.com/id?hex=${value}`)
          .then((res) => res.json())
          .then((data) => setColorName(data.name.value));
      } else
        setColor({
          ...color,
          error: true,
        });
    }, time);
  }

  return (
    <Layout>
      <h1 className="title">Get any color name</h1>

      <div className="input--container my-5">
        <input
          type="text"
          className="input"
          placeholder="Your color"
          maxLength={6}
          onChange={(e) => getData(e.target.value)}
          required
        />
        <span className="hashtag">
          #
          <span
            className="color--bar"
            style={{ background: color.error ? 'red' : color['color'] }}
          ></span>
        </span>
      </div>

      <p className="desc">
        Your color's name: <span className="color--name">{colorName}</span>
      </p>

      <Message negative>
        <Message.Header>
          We're sorry we can't apply that discount
        </Message.Header>
        <p>That offer has expired</p>
      </Message>
      {/* {color.error ? <Message error /> : <></>} */}
    </Layout>
  );
};

export default colorName;
