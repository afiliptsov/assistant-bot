const dummyObj = {
  name: "foo",
  color: "bar"
};
const test = (req, res, next) => {
  res.status(200).send(dummyObj);
};

module.exports = {
  test
};
