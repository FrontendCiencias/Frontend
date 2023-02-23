import { formatGrade } from "../../functions/collegue.function"
import { Slots } from "./slots.component"

export const ListSlots = (props) => {
  const list = () => {
    console.log(props.vacancies)
    if (props.vacancies) {
      return props.vacancies.map((s,i) => {
        return (
          <Slots key={formatGrade(1,s.grade)} grade={formatGrade(1,s.grade)} used={s.ocuped} total={s.capacity}/>
        )
      })
    }
  }
  return (
    <div className="level-vacancies">
      <div className="level-title">{props.level}</div>
      <div className="level-content">{list()}</div>
    </div>
  )
}