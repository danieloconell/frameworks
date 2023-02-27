import type { NextApiRequest, NextApiResponse } from 'next'

export default function greet(
  req: NextApiRequest,
  res: NextApiResponse<String>
) {
  const { query } = req
  const name = query.name as string
  res.status(200).end(`Hello ${name}`)
}
