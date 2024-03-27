import React from "react";

import "./student.style.css"

class CardStudent extends React.Component {
  render() {
    console.log(this.props)
  let { state, name1, name2, surname1, surname2, grade } = this.props
  let sello, img
  if (state) {
    if (state=="P") {
      img = "https://i.pinimg.com/236x/48/ee/ab/48eeab94003a4450804d9cb33ddf3089.jpg"
      sello = "https://cdn.discordapp.com/attachments/1189216028228591746/1222354136935305267/image.png?ex=6615e900&is=66037400&hm=6625285a7bee59267bc2ca7c57c3dc3747b19a257b49c328bf1b56743a3f8f02&"
    }
    if (state=="T") {
      img = "https://cdn.discordapp.com/attachments/1189216028228591746/1222354987334635571/image.png?ex=6615e9cb&is=660374cb&hm=4f652792456f1c87b8a81eaa17720d55c021257e15981e0655935e1723fbe0d3&"
      sello = "https://cdn.discordapp.com/attachments/1189216028228591746/1222352360785969212/image.png?ex=6615e759&is=66037259&hm=0963edffc79cf12aad8c44d695b10f7abc5dd584dcfab104e4953f5177bd560d&"
    }
    if (state=="E") {
      img = "https://risibank.fr/cache/medias/0/33/3319/331970/full.png"
      // sello = "https://cdn.discordapp.com/attachments/1189216028228591746/1222346343805354054/image.png?ex=6615e1be&is=66036cbe&hm=870e2a9e0547228bd607c980d948027a0b90ec07a2e96ace80f738e978bab7f6&"
    }
  }
  else img = "https://static.vecteezy.com/system/resources/previews/018/888/358/non_2x/cartoon-ghost-icon-png.png"

  return (
    <div className="card-student">
        <div className="left">
            <img src={img}/>
            {/* <h5>{state}</h5> */}
        </div>
        <div className="right">
            <h1>{name1} {name2}</h1>
            <h2>{surname1} {surname2}</h2>
            <h4>{grade}</h4>
        </div>
        <div className="sello">
          <img src={sello}/>
        </div>
    </div>
  )
  }
}

export default CardStudent