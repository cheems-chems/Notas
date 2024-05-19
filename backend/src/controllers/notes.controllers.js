const noteCtrl = {};

const Note = require('../models/Note')

noteCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);

};

noteCtrl.createNote = async (req, res) => {
     const{ title, content, date, author } = req.body;
     const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
     })
    await newNote.save();
    res.json({ message: "POST" })
}

noteCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    console.log(note);
    res.json(note)
}


noteCtrl.updateNote = async (req, res) => {
    const {title, content, author} = req.body
    await Note.findByIdAndUpdate({_id: req.params.id}, {
        title,
        content,
        author
    });
    res.json({ message:"datos actualizados correctamente" })
}

noteCtrl.deleteNode = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: "Nota eliminada "})
}


module.exports = noteCtrl;

