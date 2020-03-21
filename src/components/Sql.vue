<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<script>

export default {
  data() {
    return {
      msg: "Welcome to Vue.js sql.js boilerplate",
      db: "",
    };
  },

  methods: {
  },

  beforeCreate: function() {
    let config = {
      locateFile: (filename, prefix) => {
        console.log(`prefix is : ${prefix}`); // eslint-disable-line no-console
        return `https://sql-js.github.io/sql.js/dist/sql-wasm-debug.wasm`;
      }
  }
  let self = this;
  // The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
  // We must specify this locateFile function if we are loading a wasm file from anywhere other than the current html page's folder.
  initSqlJs(config).then(function (SQL) {
    //Create the database
    self.db = new SQL.Database();
    // Run a query without reading the results
    self.db.run("CREATE TABLE test (col1, col2);");
    // Insert two rows: (1,111) and (2,222)
    self.db.run("INSERT INTO test VALUES (?,?), (?,?)", [1, 111, 2, 222]);

    // Prepare a statement
    var stmt = self.db.prepare("SELECT * FROM test WHERE col1 BETWEEN $start AND $end");
    stmt.getAsObject({ $start: 1, $end: 1 }); // {col1:1, col2:111}

    // Bind new values
    stmt.bind({ $start: 1, $end: 2 });
    while (stmt.step()) { //
      var row = stmt.getAsObject();
      console.log('Here is a row: ' + JSON.stringify(row));  // eslint-disable-line no-console
    }
  });
  }
}
</script>
