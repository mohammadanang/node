const success = (code = 200, message, data = null, meta = null) => {
  const result = {
    status: 'success',
    code,
    message,
  };
  if (data) result.data = data;
  if (meta) result.meta = meta;

  return result;
};

const error = (code = 400, message) => {
  return {
    status: 'error',
    code,
    message,
  };
};

module.exports = {
  success,
  error,
};
