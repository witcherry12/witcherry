

interface Props {
    title: String
}

export const Title = ({title}: Props) => {
  return (
    <h1 className="title">{title}</h1>
  )
}
