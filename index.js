const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));




app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index')
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});