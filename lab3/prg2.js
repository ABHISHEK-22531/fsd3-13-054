import http from "http";

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Client</h1>");
  res.write("<h2>My Name</h2>");
  res.write(
    "<p> lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>"
  );
  res.end("<h3>Bye Bye</h3>");
});

server.listen(4444, () => console.log("Server is running at 4444..."));
