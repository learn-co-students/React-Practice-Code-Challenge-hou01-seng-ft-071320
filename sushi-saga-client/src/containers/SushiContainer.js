import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  return (
    <Fragment>
      <div className="belt">
        {
          props.fourSushis.map(sushi=> 
          <Sushi 
            key={sushi.id} 
            sushi={sushi} 
            eatSushi={props.eatSushi}
            selectedSushis={props.selectedSushis}

          />)
        }
        <MoreButton getMore={props.getMore} />
      </div>
    </Fragment>
  )
}

export default SushiContainer