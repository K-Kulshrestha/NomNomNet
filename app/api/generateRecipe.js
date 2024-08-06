// pages/api/generateRecipe.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/gpt2',
        { inputs: prompt },
        {
          headers: {
            'Authorization': `Bearer YOUR_HUGGING_FACE_API_KEY`
          }
        }
      );

      res.status(200).json({ recipe: response.data });
    } catch (error) {
      res.status(500).json({ error: 'Error generating recipe' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
