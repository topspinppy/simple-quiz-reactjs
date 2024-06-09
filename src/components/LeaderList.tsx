import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { HallOfFame } from "../store/quiz.store";

interface ILeaderListProps {
  lists: HallOfFame[];
}

export default function LeaderList(props: ILeaderListProps) {
  const { lists } = props;
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper", mt: "2rem" }}>
      {lists.map((list, index) => {
        return (
          <ListItem alignItems="flex-start" key={index}>
            <ListItemAvatar>
              <Avatar alt={`${index}`} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={list.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Score: {list.score}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
}
