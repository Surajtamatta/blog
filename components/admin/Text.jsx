// components/Text.jsx
import { useNode } from '@craftjs/core';

const Text = ({ text = "Editable text" }) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      contentEditable
      onInput={(e) => setProp((props) => (props.text = e.target.innerText))}
    >
      {text}
    </div>
  );
};

export default Text;
