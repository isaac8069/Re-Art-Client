import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import Photo1 from "./../homeComponents/images/photo1.jpeg"
import Photo2 from "./../homeComponents/images/Modern1.jpeg"
import Photo3 from "./../homeComponents/images/pop.jpeg"

const cardstyle = {
    
}

const Cards = () => {

    return (
        <div className='row'>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={Photo2} />
                    <Card.Body>
                        <Card.Text>
                            Modern
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="top" src={Photo3} />
                    <Card.Body>
                        <Card.Text>
                            Pop
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="top" src={Photo1} />
                    <Card.Body>
                        <Card.Text>
                            Photography
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Cards