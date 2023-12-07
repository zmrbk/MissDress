import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import classes from "./QuestionPage.module.scss";
import { questionsItems } from "./data/questions";

const QuestionPage = () => (
  <div className={classes.questionPage}>
    <div className="container">
      <h3 className={classes.header}>Ответы на часто задаваемые вопросы</h3>
      {questionsItems.map((item) => {
        return (
          <Accordion key={item.id.toString()} className={classes.accordion}>
            <AccordionSummary className={classes.summary} id="panel1a-header">
              <Typography>
                <span>{item.title}</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              {Array.isArray(item.text) ? (
                item.text.map((text) => (
                  <ul>
                    <li>{text.message}</li>
                  </ul>
                ))
              ) : (
                <Typography>{item.text}</Typography>
              )}
              {item.list && (
                <ul>
                  <li>{item.list.number_1}</li>
                  <li>{item.list.number_2}</li>
                </ul>
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  </div>
);

export default QuestionPage;
