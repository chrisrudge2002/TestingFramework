var context = require.context('./app/tests', true, /.jsx$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);
