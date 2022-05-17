export default function handler(req, res) {
  const { test } = req.query;
  res.end(`Post: ${test}`);
}
