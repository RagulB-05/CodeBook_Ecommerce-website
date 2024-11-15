// Import dependencies
import jsonServer from "json-server";
import auth from "json-server-auth";
import path from "path";

// Create server instance and set up router
const server = jsonServer.create();
const router = jsonServer.router(path.join("data", "db.json"));
const middlewares = jsonServer.defaults();

// Bind the database (this step is crucial)
server.db = router.db;

// Use middlewares and authentication
server.use(middlewares);
server.use(auth);
server.use(router);

// Set the port and start the server
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`JSON Server with Auth is running on http://localhost:${PORT}`);
});
