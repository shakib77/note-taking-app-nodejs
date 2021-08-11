const fs = require('fs')
const getNotes = function () {
    return 'Your note...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (note.title.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)

        console.log('New note added!');
    }

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try{
        const noteBuffer = fs.readFileSync('notes.json')
        const noteJSON = noteBuffer.toString()
        return JSON.parse(noteJSON)
    } catch (err) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
};
