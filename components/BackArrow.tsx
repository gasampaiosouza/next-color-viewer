import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

type ArrowType = {
  style: object;
};

const BackArrow = (props: ArrowType) => {
  return (
    <Link href="/">
      <div className="back--container">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="arrow--icon"
          style={{ ...props.style }}
        />
      </div>
    </Link>
  );
};

export default BackArrow;
