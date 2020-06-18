import Layout from '../components/Layout';
import { useState } from 'react';

import Link from 'next/link';

import ErrorMessage from '../components/ErrorMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BackArrow from '../components/BackArrow';

const colorName = () => {
  const [colorName, setColorName] = useState('');
  const [color, setColor] = useState({
    color: '',
    error: false,
  });

  let timer: number;

  const getData = (value: string) => {
    const time = 1000;
    clearTimeout(timer);

    timer = window.setTimeout(() => {
      if (!value) return;

      if (value.match(/^[0-9a-fA-F]+/)) {
        setColor({
          ...color,
          error: false,
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
  };

  return (
    <Layout style={{ height: '75vh' }} className="container mt-4">
      <BackArrow />

      <h1 className="title">Get any color name</h1>

      <div className="input--container my-5">
        <input
          type="text"
          className="input"
          placeholder="Your color"
          maxLength={6}
          onChange={(e) => getData(e.target.value)}
          // required
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
        Your color's name:{' '}
        <span
          className="color--name"
          style={{ color: color.error ? 'red' : color['color'] }}
        >
          {color.error ? ':[' : colorName || 'write something'}
        </span>
      </p>

      {color.error ? (
        <ErrorMessage title="Invalid color" desc="Please, write valid color" />
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default colorName;
