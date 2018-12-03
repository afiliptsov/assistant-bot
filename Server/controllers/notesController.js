const addNote = (req, res) => {
  req.app
    .get("db")
    .addNote([req.body.description])
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

const getAllNotes = (req, res) => {
  req.app
    .get("db")
    .getAllNotes()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

module.exports = {
  addNote,
  getAllNotes
};
