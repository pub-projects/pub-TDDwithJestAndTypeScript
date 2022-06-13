import app from "./app";

const PORT = process.env.SERVER_PORT || 3009;
const HOST = "127.0.0.1";

app.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`);
});
