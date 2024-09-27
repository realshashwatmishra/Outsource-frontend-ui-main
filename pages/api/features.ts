import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(`${process.env.STRAPI_URL}/api/features`);
  const data = await response.json();
  res.status(200).json(data);
}