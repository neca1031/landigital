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
          <MissionHeading>Ko smo mi</MissionHeading>
          <MissionInfo>
            Lan digital su osnovala tri druga, Aleksa, Nemanja i Luka u želji da
            svoj talenat pretvore u nešto korisno. Kao momci koji su odrasli “za
            računarom” prosto nismo mogli da izaberemo bolje zanimanje.
          </MissionInfo>
        </TheMission>
        <TheMission>
          <Span></Span>
          <MissionHeading>Naša misija</MissionHeading>
          <MissionInfo>
            Želja nam je da pomoću svog talenta pomognemo što većem broju ljudi
            da plasira svoj biznis na tržište. Nudeći raznolik spektar usluga,
            spremni smo da svačiji posao dignemo na viši nivo.
          </MissionInfo>
        </TheMission>
        <TheMission>
          <Span></Span>
          <MissionHeading>Čime se bavimo</MissionHeading>
          <MissionInfo>
            <List>
              <ListItem>Izrada veb-sajtova</ListItem>
              <ListItem>Vođenje društvenih mreža</ListItem>
              <ListItem>Marketing</ListItem>
            </List>
          </MissionInfo>
        </TheMission>
      </MissionWrap>
    </MissionContainer>
  );
};

export default Mission;
