module.exports = (req, res) => {
  const message = 'Welcome to root!';

  console.log(message);
  res.send({
    message,
  });
};
