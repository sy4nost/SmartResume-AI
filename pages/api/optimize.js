export default async function handler(req, res) {
  const { text } = req.body;
  const optimizedText = text ? text + "\n\n[Optimized by AI]" : "No input provided.";
  res.status(200).json({ optimizedText });
}
