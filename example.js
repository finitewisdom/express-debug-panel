    const acronym = require('./'); // require the `index.js` file from the same directory.

    acronym('for your information', (err, resp) => {
        if (err) {
            console.log(err);
        }

        console.log(resp);
    });
    