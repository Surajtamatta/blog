// components/Toolbar.jsx
import { useEditor } from '@craftjs/core';

const Toolbar = () => {
  const { connectors } = useEditor();

  return (
    <div className="toolbar">
      <button ref={(ref) => connectors.create(ref, <Text text="New Text Block" />)}>
        Add Text
      </button>
      <button ref={(ref) => connectors.create(ref, <ImageBlock />)}>
        Add Image
      </button>
      <button ref={(ref) => connectors.create(ref, <VideoBlock />)}>
        Add Video
      </button>
    </div>
  );
};

export default Toolbar;
