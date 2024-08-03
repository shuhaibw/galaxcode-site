import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {AZURE_TRANSLATOR_ENDPOINT_URI, AZURE_TRANSLATOR_KEY_URI, AZURE_TRANSLATOR_LOCATION_URI} from './BACKEND_URI'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { text, to } = req.body;

  if (!text || !to) {
    return res.status(400).json({ error: 'Missing required parameters: text and/or to' });
  }

  try {
    const response = await axios.post(
      `${AZURE_TRANSLATOR_ENDPOINT_URI}/translate?api-version=3.0&to=${to}`,
      [{ text }],
      {
        headers: {
          'Ocp-Apim-Subscription-Key': AZURE_TRANSLATOR_KEY_URI,
          'Ocp-Apim-Subscription-Region': AZURE_TRANSLATOR_LOCATION_URI, // Use resource location
          'Content-Type': 'application/json',
          'X-ClientTraceId': uuidv4().toString(),
        },
      }
    );

    const data = response.data;
    if (response.status === 200) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json({ error: data.error.message });
    }
  } catch (error) {
    console.error('Translation error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
