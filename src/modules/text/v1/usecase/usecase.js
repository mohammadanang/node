const getAll = () => {
  const title = 'The Text Title';
  const description =
    'The text description with anything words can you used here.';
  const data = {
    title: title,
    description: description,
  };

  return data;
};

module.exports = {
  getAll,
};
