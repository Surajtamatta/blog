// pages/preview.js
import { Editor, Frame } from '@craftjs/core';
import Editors from '../../../components/admin/Editor';
import ImageBlock from '../../../components/admin/ImageBlock';
import VideoBlock from '../../../components/admin/VideoBlock';

const BlogEditor = () => {
  return (
    <div>
      <h1>Preview</h1>
      <Editor enabled={false}>
        <Frame>
          {/* Content goes here */}
          {/* <Editors/> */}
          <ImageBlock/>
          <VideoBlock/>

        </Frame>
      </Editor>
    </div>
  );
};

export default BlogEditor;
