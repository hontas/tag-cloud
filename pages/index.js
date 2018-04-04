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
        <div className="Index">
          <main className="Index__main">
            <InputForm fetchTagsFor={this.fetchTagsFor} />
            <TagCloud tags={tags} />
          </main>
        </div>
        <style jsx>
          {`
            .Index {
              flex: 1;
              display: flex;
              justify-content: center;
            }
            .Index__main {
              flex: 1;
              display: flex;
              flex-direction: column;
              max-width: 800px;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default IndexPage;
