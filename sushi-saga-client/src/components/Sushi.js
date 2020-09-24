import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {name,price,img_url} = props.sushi

  const eaten = props.selectedSushis.includes(props.sushi)
  return (
    <Fragment>
      <div className="sushi">
        <div className="plate" 
            onClick={()=>{if(!eaten){props.eatSushi(props.sushi)}}}>
          { 
            eaten ?
              null
            :
              <img src={img_url} alt={name} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    </Fragment>
  )
}

export default Sushi