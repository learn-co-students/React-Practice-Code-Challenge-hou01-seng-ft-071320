import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {props.showingSushi.map(sushi=>
          <Sushi sushi={sushi} removeSushi={props.removeSushi} takenSushi={props.takenSushi}/>
          )
        } 
    <MoreButton renderNext={props.renderNext}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer