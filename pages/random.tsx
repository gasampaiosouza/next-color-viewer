import Layout from '../components/Layout';
import { useState } from 'react';
import BackArrow from '../components/BackArrow';
import ErrorMessage from '../components/ErrorMessage';

const random: React.FC = () => {
  const [color, setColor] = useState({
    color: '',
    contrast: '#343a40',
    error: false,
  });

  const handleColor = () => {
    const letters = '0123456789ABCDEF'.split('');
    let color = '';

    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];

    const contrast = getContrastYIQ(color);

    setColor({
      color,
      contrast,
      error: false,
    });
  };

  const getContrastYIQ = (hexcolor: string) => {
    let r = parseInt(hexcolor.substr(0, 2), 16);
    let g = parseInt(hexcolor.substr(2, 2), 16);
    let b = parseInt(hexcolor.substr(4, 2), 16);
    let yiq = (r * 299 + g * 587 + b * 114) / 1000;

    return yiq >= 128 ? '#343a40' : '#fff';
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <BackArrow style={{ color: color['contrast'] }} />

      <div
        className="fullscreen"
        onClick={() => handleColor()}
        style={{
          background: `#${color['color']}`,
        }}
        onContextMenu={(ev) => {
          ev.preventDefault();

          // copy to clipboard
          color['color']
            ? navigator.clipboard.writeText(color['color'])
            : (console.log('nop'),
              setColor({
                ...color,
                error: true,
              }));
        }}
      >
        <div className="mid--container" style={{ color: color['contrast'] }}>
          <h1 className="title mb-4">
            {color['color'] ? `#${color['color']}` : 'click!'}
          </h1>
          <p className="desc">
            <span className="line">Left click</span>: Change color
          </p>
          <p className="desc">
            <span className="line">Right click</span>: Copy color code
          </p>
        </div>
      </div>

      {color['error'] ? (
        <ErrorMessage
          title="No color yet"
          desc="Click to see a color, then you can copy it!"
        />
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default random;
