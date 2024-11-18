// components/VideoBlock.jsx
import { useNode } from '@craftjs/core';

const VideoBlock = ({ url = 'https://www.youtube.com/embed/dQw4w9WgXcQ' }) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))} className="video-block">
      <iframe src={url} title="Video Player" frameBorder="0" allowFullScreen></iframe>
      <input
        type="text"
        placeholder="Video URL"
        onChange={(e) => setProp((props) => (props.url = e.target.value))}
      />
    </div>
  );
};

export default VideoBlock;
