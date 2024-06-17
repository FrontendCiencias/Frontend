import { Link } from 'react-router-dom'
import { ActionButton } from '../buttons/action/action-button.component'

export const Item = (props) => {
  const { k, surnames, names, action, dni } = props

  const button = () => {
    if (action!="none") {
      return (
        <td className='action'>
          <Link to={'/app/admin/secretary/management/student/edit/'+dni}>
            <ActionButton
              text={action}
              type="primary"
              size="small"
            />
          </Link>
        </td>
      )
    }
  }
  return (
    <tr className="items" key={k}>
      <td className='surnames'>{surnames}</td>
      <td className='names'>{names}</td>
      {/* <td className='action'>
        <Link to={'/app/admin/secretary/management/student/image/'+dni}>
          <ActionButton
            text={'I'}
            type="primary"
            size="small"
            />
        </Link>
      </td> */}
      {button()}  
    </tr>
  )
}