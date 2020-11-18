const { writable } = require("svelte/store");

const makeIt = () => writable({});

module.exports = makeIt;
