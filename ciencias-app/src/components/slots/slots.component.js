import './slots.style.css'

export const Slots = (props) => {
  const { grade, used, total } = props
  if (used>=total) {
    return (
      <div className="slots red">
        {`${grade}: ${used}/${total}`}
      </div>
    )
  } else {
    return (
      <div className="slots green">
        {`${grade}: ${used}/${total}`}
      </div>
    )
  }
}