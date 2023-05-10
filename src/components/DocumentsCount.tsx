import groq from 'groq'

export const query = groq`count(*[])`

interface DocumentsCountProps {
  data: number
}

export function DocumentsCount({ data }: DocumentsCountProps) {
  return (
    <>
      Documents: <strong>{data}</strong>
    </>
  )
}
