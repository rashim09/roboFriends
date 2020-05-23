import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((robo, i) => {
                    return <Card key={i} id={robo.id} name={robo.name} email={robo.email}></Card>
                })
            }
        </div>
    )
}
export default CardList