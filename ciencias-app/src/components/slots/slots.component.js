import './slots.style.css'

export const Slots = (props) => {
  const { grade, used, total } = props
  if (used>=total) {
    return (
      <div className="slots">
        <div className='grade'>
          {`${grade}:`}
        </div>
        <div className='used red'>
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
        <div className='used green'>
          {`${used}/${total}`}
        </div>
      </div>
    )
  }
}