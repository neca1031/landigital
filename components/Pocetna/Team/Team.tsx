import React from "react";
import {
  Employee,
  EmployeeImage,
  EmployeeName,
  Occupation,
  TeamContainer,
  TeamHeading,
  TeamInfo,
  TeamWrapper,
} from "./TeamStyles";

const Team = () => {
  return (
    <TeamWrapper>
      <TeamHeading>Meet Our Team</TeamHeading>
      <TeamInfo>
        LAN Digital was created as the wish of three friends to start something
        of their own.
      </TeamInfo>
      <TeamContainer>
        <Employee>
          <EmployeeImage src={"/ng.jpeg"}></EmployeeImage>
          <EmployeeName>Nemanja</EmployeeName>
          <Occupation>Frontend Developer</Occupation>
        </Employee>
        <Employee>
          <EmployeeImage src={"/am.jpeg"}></EmployeeImage>
          <EmployeeName>Aleksa</EmployeeName>
          <Occupation>Marketing Expert</Occupation>
        </Employee>
        <Employee>
          <EmployeeImage src={"/ll.jpeg"}></EmployeeImage>
          <EmployeeName>Luka</EmployeeName>
          <Occupation>Backend Developer</Occupation>
        </Employee>
      </TeamContainer>
    </TeamWrapper>
  );
};

export default Team;
