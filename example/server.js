const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');

const app = express();
app.use(express.static(__dirname));
app.use(process.env.GRAPHQL_SERVER, graphqlHTTP(() => ({ schema })));

app.listen(0, function() {
  const port = this.address().port;
  console.log(`Started on http://localhost:${port}/`);
});
