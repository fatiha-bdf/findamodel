let express = require('express')
let app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
var cors = require('cors')
const path = require('path')

app.use(cors())

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/portfolio', require('./routes'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
	  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// const { port } = config;
let port = process.env.PORT ||'8081'
app.listen(port, () => {
	console.log(`server running on port ${port}`);
});
