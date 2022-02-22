import React from 'react'
import { Employee, EmployeeImage, EmployeeName, Occupation, TeamContainer, TeamHeading, TeamInfo, TeamWrapper } from './TeamStyles'

const Team = () => {
    return (
        <TeamWrapper>
            <TeamHeading>
            Upoznajte naš tim
            </TeamHeading>
            <TeamInfo>
            Lan Digital je nastao kao želja tri druga da naprave nešto svoje.
            </TeamInfo>
            <TeamContainer>
                <Employee>
                    <EmployeeImage src={'/ng.jpeg'}>

                    </EmployeeImage>
                    <EmployeeName>
                    Nemanja
                    </EmployeeName>
                    <Occupation>
                    Frontend Developer
                    </Occupation>
                </Employee>
                <Employee>
                    <EmployeeImage src={'/am.jpeg'}>

                    </EmployeeImage>
                    <EmployeeName>
                    Aleksa
                    </EmployeeName>
                    <Occupation>
                    Marketing Ekspert
                    </Occupation>
                </Employee>
                <Employee>
                    <EmployeeImage src={'/ll.jpeg'}>

                    </EmployeeImage>
                    <EmployeeName>
                    Luka
                    </EmployeeName>
                    <Occupation>
                    Backend Developer
                    </Occupation>
                </Employee>
            </TeamContainer>
        </TeamWrapper>
    )
}

export default Team
