import React from "react";
import {
  MissionContainer,
  MissionWrap,
  TheMission,
  Span,
  MissionHeading,
  MissionInfo,
  List,
  ListItem,
} from "./MissionStyles";

const Mission = () => {
  return (
    <MissionContainer>
      <MissionWrap>
        <TheMission>
          <Span></Span>
          <MissionHeading>Who are we?</MissionHeading>
          <MissionInfo>
            LAN Digital was created by three friends - Aleksa, Nemanja and Luka
            started this agency to turn their talent into something useful. As
            guys who "grew up in front of a computer", we simply could not have
            chosen a better career.
          </MissionInfo>
        </TheMission>
        <TheMission>
          <Span></Span>
          <MissionHeading>Our Mission</MissionHeading>
          <MissionInfo>
            Our wish is to use our talent to help as many people as possible
            place their business on the market. Providing a variety of services,
            we are ready to raise clients' businesses to the next level.
          </MissionInfo>
        </TheMission>
        <TheMission>
          <Span></Span>
          <MissionHeading>What do we do?</MissionHeading>
          <MissionInfo>
            <List>
              <ListItem>Web Development</ListItem>
              <ListItem>Manage and Run Social Media</ListItem>
              <ListItem>Marketing & Advertisement</ListItem>
            </List>
          </MissionInfo>
        </TheMission>
      </MissionWrap>
    </MissionContainer>
  );
};

export default Mission;
