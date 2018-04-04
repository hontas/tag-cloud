import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TagCloud as ReactTagCloud } from 'react-tagcloud';

const TagCloud = ({ className, tags = [] }) => (
  <div className={classNames('TagCloud', className)} data-test="tag-cloud">
    {tags.length > 0 ? (
      <ReactTagCloud
        colorOptions={{
          hue: 'green',
          luminosity: 'light',
        }}
        renderer={tagRenderer}
        minSize={3}
        maxSize={10}
        tags={tags}
      />
    ) : (
      <p className="TagCloud__no-tags-msg">No tags to display</p>
    )}
    <style jsx>
      {`
        .TagCloud {
          flex: 1;
          line-height: 1;
          padding: 1em;
          padding-top: 0.5em;
          overflow: auto;
        }
        .TagCloud__no-tags-msg {
          color: darkgray;
        }
      `}
    </style>
  </div>
);

function tagRenderer(tag, size, color) {
  return (
    <span
      key={tag.value}
      className="tag-cloud-tag"
      style={{
        margin: '0px 3px',
        verticalAlign: 'middle',
        display: 'inline-block',
        fontSize: `${size}vw`,
        color,
      }}
      title={tag.count}
    >
      {tag.value}
    </span>
  );
}

TagCloud.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object),
};

export default TagCloud;
