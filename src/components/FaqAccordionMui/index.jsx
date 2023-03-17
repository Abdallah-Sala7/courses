import { useState } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import { accordionStyles, summaryStyles, typographyStyle } from "./style.js";

const FaqAccordionMui = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => {
    setExpanded(panel);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={() => handleChange("panel1")}
        sx={accordionStyles}
      >
        <AccordionSummary
          expandIcon={
            <>
              <span className="plus">+</span> <span className="minus">-</span>
            </>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={summaryStyles}
        >
          <Typography sx={typographyStyle}>
            Do you offer discounts for students?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={typographyStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={() => handleChange("panel2")}
        sx={accordionStyles}
      >
        <AccordionSummary
          expandIcon={
            <>
              <span className="plus">+</span> <span className="minus">-</span>
            </>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={summaryStyles}
        >
          <Typography sx={typographyStyle}>
            Do you offer special pricing for big teams?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={typographyStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={() => handleChange("panel3")}
        sx={accordionStyles}
      >
        <AccordionSummary
          expandIcon={
            <>
              <span className="plus">+</span> <span className="minus">-</span>
            </>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={summaryStyles}
        >
          <Typography sx={typographyStyle}>
            What is the past experience of your teachers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={typographyStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={() => handleChange("panel4")}
        sx={accordionStyles}
      >
        <AccordionSummary
          expandIcon={
            <>
              <span className="plus">+</span> <span className="minus">-</span>
            </>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={summaryStyles}
        >
          <Typography sx={typographyStyle}>
            Do you offer discounts for non-profits?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={typographyStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={() => handleChange("panel5")}
        sx={accordionStyles}
      >
        <AccordionSummary
          expandIcon={
            <>
              <span className="plus">+</span> <span className="minus">-</span>
            </>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={summaryStyles}
        >
          <Typography sx={typographyStyle}>
            Do you offer discounts for students?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={typographyStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={() => handleChange("panel6")}
        sx={accordionStyles}
      >
        <AccordionSummary
          expandIcon={
            <>
              <span className="plus">+</span> <span className="minus">-</span>
            </>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={summaryStyles}
        >
          <Typography sx={typographyStyle}>
            Do you offer special pricing for big teams?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={typographyStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FaqAccordionMui;
