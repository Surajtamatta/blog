// components/BlogEditor.jsx
import { Editor, Frame, Element } from '@craftjs/core';
import Toolbar from './Toolbar';
import Text from './Text';
import ImageBlock from './ImageBlock';
import VideoBlock from './VideoBlock';

const Editors = () => {
  return (
    <div className="editor-container">
      <Toolbar />
      <Editor resolver={{ Text, ImageBlock, VideoBlock }}>
        <Frame>
          <Element is="div" canvas>
            <Text text="Start writing your blog here!" />
          </Element>
        </Frame>
      </Editor>
    </div>
  );
};

export default Editors;
