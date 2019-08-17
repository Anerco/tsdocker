#!/usr/src/bin/env node

import http from "http";
import normalizePort from "normalize-port";
import Debug from "debug";
import app from "../app";

const debug = Debug("tsdocker:server");

const server = http.createServer(app);

const host = process.env.HOST || "0.0.0.0";
const port = normalizePort(process.env.PORT || 8080);

app.set("port", port);
app.set("host", host);

server.listen(port, host);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}t`);
}

server.on("error", onError);
server.on("listening", onListening);
