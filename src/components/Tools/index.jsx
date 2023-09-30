import {
  StyledColoredSubTitle,
  StyledGraySubTitle,
  StyledSection,
} from "../About/About.styled";
import { StyledList, StyledListItem } from "./Tools.styled";

import figma_image from "../../assets/tools/figma.png";
import adobe_il_image from "../../assets/tools/adobe_il.png";
import adobe_ps_image from "../../assets/tools/adobe_ps.png";
import adobe_xd_image from "../../assets/tools/adobe_xd.png";
import miro_image from "../../assets/tools/miro.png";
import notion_image from "../../assets/tools/notion.png";
import trello_image from "../../assets/tools/trello.png";

const Tools = () => {
  return (
    <StyledSection>
      <StyledColoredSubTitle margin="auto">Tools</StyledColoredSubTitle>
      <StyledGraySubTitle textAlign="center" width="592px" margin="auto">
        Most common methods for designing websites that work well on desktop is
        responsive and adaptive design
      </StyledGraySubTitle>
      <StyledList>
        <StyledListItem>
          <img src={figma_image} alt="" />
          <p>Figma</p>
        </StyledListItem>
        <StyledListItem>
          <img src={adobe_xd_image} alt="" />
          <p>Adobe Xd</p>
        </StyledListItem>
        <StyledListItem>
          <img src={adobe_ps_image} alt="" />
          <p>Adobe Photoshop</p>
        </StyledListItem>
        <StyledListItem>
          <img src={adobe_il_image} alt="" />
          <p>Adobe illustrator</p>
        </StyledListItem>
        <StyledListItem>
          <img src={notion_image} alt="" />
          <p>Notion</p>
        </StyledListItem>
        <StyledListItem>
          <img src={trello_image} alt="" />
          <p>Trello</p>
        </StyledListItem>
        <StyledListItem>
          <img src={miro_image} alt="" />
          <p>Miro</p>
        </StyledListItem>
      </StyledList>
    </StyledSection>
  );
};

export default Tools;
