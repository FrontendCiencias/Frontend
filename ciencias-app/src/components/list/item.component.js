import { Link } from 'react-router-dom'
import { ActionButton } from '../buttons/action/action-button.component'

export const Item = (props) => {
  const { k, surnames, names, action, href } = props
  return (
    <tr className="items" key={k}>
      <td className='surnames'>{surnames}</td>
      <td className='names'>{names}</td>
      <td className='action'>
        <Link to={href}>
          <ActionButton
            text={action}
            type="primary"
            size="small"
          />
        </Link>
      </td>
    </tr>
  )
}