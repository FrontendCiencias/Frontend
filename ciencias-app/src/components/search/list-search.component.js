

export const ListSearch = (props) => {
  const list = () => {
    // console.log(props.data)
    if (props.data) {
      return props.data.map((s,i) => {
        return (
          <Slots key={formatGrade(1,s.grade)} grade={formatGrade(1,s.grade)} used={s.ocuped} total={s.capacity}/>
        )
      })
    }
  }
  const categoryList = () => {
    
  }
  return (
    <div className="level-vacancies">
      <div className="level-title">{props.level}</div>
      <div className="level-content">{list()}</div>
    </div>
  )
}