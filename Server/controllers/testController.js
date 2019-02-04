const dummyObj = {
  name: "foo",
  color: "bar"
};
const test = (req, res, next) => {
  res.status(200).json({ name: 123, boo: 452 });
};

module.exports = {
  test
};
