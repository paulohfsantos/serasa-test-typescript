interface IIconProps {
  name: string
  variant: 'light' | 'dark' | 'yellow'
  onClick?: () => void
}

const Icon = (props: IIconProps) => {
  const { name, variant, onClick } = props
  return (
    <i className={`icon-${name} ${variant}`} title={name} onClick={onClick}></i>
  )
}

export default Icon