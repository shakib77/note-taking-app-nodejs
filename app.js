// const validator = require('validator');

const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');


//yargs version change
yargs.version('1.1.0')

/*Adding notes*/
yargs.command({
    command: 'add',
    describe: 'Add new note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
})

/* Remove note*/
yargs.command({
    command: 'remove',
    describe: 'Remove note!',
    handler: function () {
        console.log('Remove note');
    }
})

//Listing notes
yargs.command({
    command: 'list',
    describe: 'List of notes',
    handler: function () {
        console.log('List of notes!');
    }
})

//Reading notes
yargs.command({
    command: 'read',
    describe: 'Read notes',
    handler: function () {
        console.log('Read notes!');
    }
})

yargs.parse()

// console.log('yargs->', yargs.argv);