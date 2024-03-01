import { formatGrade } from "../../functions/collegue.function";
import { Item } from "./item.component"
import './list.style.css'


export const List = (props) => {
  const categoryList = () => {
    const {categories, items} = props;
    if (categories && items) {
      return props.categories.map((n,i) => {
        const arr = [{title:`${n}`}]
        for (let j = 0; j < items.length; j++) {
          if (items[j].grade == n) {
            arr.push(items[j])
          }
        }
        return arr.map((m,j) => {
          if(m.title) {
            if (arr.length!=1) {
              return (
                <tr>
                  <td className="title" key={"title"+j}>
                    <h4>
                      {formatGrade(0,m.title)}
                    </h4>
                  </td>
                </tr>
              )
            }
          } else {
            return (
              <Item k={m.names.name1+m.names.surname1+j} surnames={m.names.surname1 + " " + m.names.surname2} names={m.names.name1 + " " + m.names.name2} action={props.action || "none"} dni={m.dni}/>
            )
          }
        })
      })
    }
  }
  return (
    <table className="list">
      <tbody className="items">{categoryList()}</tbody>
    </table>
  )
}