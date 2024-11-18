// components/ImageBlock.jsx
import { useNode } from '@craftjs/core';

const ImageBlock = ({ src = 'https://via.placeholder.com/150' }) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))} className="image-block">
      <img src={src} alt="Blog Image" />
      <input
        type="text"
        placeholder="Image URL"
        onChange={(e) => setProp((props) => (props.src = e.target.value))}
      />
    </div>
  );
};

export default ImageBlock;
