

interface Props {
    paragraph: String,
    color: String
}

export const Paragraph = ({paragraph, color}: Props) => {
  return (
    <p className={`${color}`}>{paragraph}</p>
  )
}