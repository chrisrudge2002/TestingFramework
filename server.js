const express = require('express');
const PORT = process.env.PORT || 3000;

// Create our app
let app = express();

// Re-direct all https traffic to use http
app.use(function(req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect(`http://${req.hostname}${req.url}`);
	} else {
		next();
	}
});

app.use(express.static('public'));

app.listen(PORT, function() {
	console.log(`Express server is up on port ${PORT}`);
});
