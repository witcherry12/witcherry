

interface Props {
  subtitle: String
}

export const Subtitle = ({subtitle}: Props) => {
  return (
    <h3 className="subtitle">{subtitle}</h3>
  )
}