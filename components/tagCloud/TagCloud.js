import React from 'react';
import PropTypes from 'prop-types';
import { TagCloud as ReactTagCloud } from 'react-tagcloud';

const TagCloud = ({ tags = [] }) => (
  <div className="TagCloud">
    {tags.length > 0 ? (
      <ReactTagCloud minSize={12} maxSize={35} tags={tags} />
    ) : (
      <p className="no-tags-msg">No tags to display</p>
    )}
    <style jsx>
      {`
        .TagCloud {
          flex: 1;
          padding: 1em;
          padding-top: 0.5em;
          overflow: auto;
        }
        .no-tags-msg {
          color: darkgray;
        }
      `}
    </style>
  </div>
);

TagCloud.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object),
};

export default TagCloud;
