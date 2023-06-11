import { ActionButton } from '../buttons/action/action-button.component'
import './search.style.css'

export const ItemSearch = (props) => {
  const { surnames, names, action, href } = props
  return (
    <tr className="slots">
      <td>{surnames}</td>
      <td>{names}</td>
      <td>
        <Link to={href}>
          <ActionButton
            text={action}
            type="Primary"
          />
        </Link>
      </td>
    </tr>
  )
}