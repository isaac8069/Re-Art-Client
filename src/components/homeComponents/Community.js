import React from "react"
import { Card, CardGroup } from "react-bootstrap"
import CommunityImage from "./../homeComponents/images/community1.jpeg"


const communitystyle = {
    height: '30rem',
    width: '40rem',
}

const space = {
    margin: '45px'
}
const Community = () => {

    return (
        <div>
            <CardGroup style={space}>
                <Card>
                    <Card.Img variant="top" src={CommunityImage} style={communitystyle} />
                </Card>
                <br />
                <Card>
                    <Card.Body>
                        <Card.Text>
                            "Lorem ipsum dolor sit amet, cibo sensibus interesset no sit. Et dolor possim volutpat qui. No malis tollit iriure eam, et vel tale zril blandit, rebum vidisse nostrum qui eu."
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="top" src={CommunityImage} style={communitystyle} />
                </Card>
            </CardGroup>
        </div>
    )
}

export default Community