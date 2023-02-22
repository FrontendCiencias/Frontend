import './slots.style.css'

export const Slots = (props) => {
  const { grade, used, total } = props
  if (used>=total) {
    return (
      <div className="slots">
        <div className='grade'>
          {`${grade}:`}
        </div>
        <div className='used danger'>
          {`${used}/${total}`}
        </div>
      </div>
    )
  } else {
    return (
      <div className="slots">
        <div className='grade'>
          {`${grade}:`}
        </div>
        <div className='used safe'>
          {`${used}/${total}`}
        </div>
      </div>
    )
  }
}