import { frontpagePage, aboutPage } from './util/pagesUtil.js';

app.get('/', (req, res) => {
    res.send(frontpagePage);
});

app.get('/about', (req, res) => {
    res.send(aboutPage);
});

// assignment set up a router here and include it in app.js