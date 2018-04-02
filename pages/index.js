import React from 'react';

import fetchTags from '../client/services/fetchTags';
import InputForm from '../client/components/inputForm/InputForm.js';
import TagCloud from '../client/components/tagCloud/TagCloud.js';
import Layout from '../client/components/Layout';

class IndexPage extends React.Component {
  state = { tags: [] };

  fetchTagsFor = (value) => {
    return fetchTags(value).then((tags) => this.setState({ tags }));
  };

  render() {
    const { tags } = this.state;

    return (
      <Layout>
        <main>
          <InputForm fetchTagsFor={this.fetchTagsFor} />
          <TagCloud tags={tags} />
        </main>
        <style jsx>
          {`
            main {
              flex: 1;
              display: flex;
              flex-direction: column;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default IndexPage;
