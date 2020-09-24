import React from 'react'

const SushiWallet = (props) => {
    
    return(
        <form className = 'wallet'>
            <label>
                AMOUNT:
                <input onChange={(e)=>props.addAmount(e.currentTarget.value)} type="text" name="textbox" placeholder='Cash Only'/>
            </label>
            <input onClick={(e)=>{e.preventDefault();props.updateMoneyLeft();e.currentTarget.parentElement.reset()}} type="submit" value="Add Money" />
        </form>
    )

}

export default SushiWallet