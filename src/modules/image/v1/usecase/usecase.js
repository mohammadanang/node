const { APP_URL } = require('@config/env/index');

const getUrl = () => {
  try {
    const title = 'The Image Link';
    const link = `${APP_URL}/public/537b9327dcd4.jpeg`;
    const data = {
      title: title,
      link,
    };

    return data;
  } catch(e) {
    throw new Error(e);
  }
};

module.exports = {
  getUrl,
};
