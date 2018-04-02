const defaultOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

function makeRequest(url, userOptions = {}, data) {
  let options = {
    ...defaultOptions,
    ...userOptions,
    headers: {
      ...defaultOptions.headers,
      ...userOptions.headers,
    },
  };

  if (data) {
    options = {
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  }

  return fetch(url, options)
    .then((response) => {
      if (response.ok) return response.json();
      return response.json().then((error) =>
        Promise.reject({
          ...response,
          error,
        })
      );
    })
    .catch((reason) => {
      // eslint-disable-next-line
      console.log(reason);
      throw reason;
    });
}

export function getJSON(url) {
  return makeRequest(url);
}

export function postJSON(url, data) {
  return makeRequest(url, {}, data);
}
