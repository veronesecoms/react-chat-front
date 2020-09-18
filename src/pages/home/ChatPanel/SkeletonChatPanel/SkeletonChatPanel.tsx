import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { ListItem, ListItemAvatar } from "@material-ui/core";
import { UserNameAndLastMessageTextWrapper } from "../ChatPanelStyles";

const SkeletonChatPanel = () => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
        </ListItemAvatar>
        <UserNameAndLastMessageTextWrapper>
          <Skeleton
            animation="wave"
            height={10}
            width="100%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton animation="wave" height={10} width="40%" />
        </UserNameAndLastMessageTextWrapper>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
        </ListItemAvatar>
        <UserNameAndLastMessageTextWrapper>
          <Skeleton
            animation="wave"
            height={10}
            width="100%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton animation="wave" height={10} width="40%" />
        </UserNameAndLastMessageTextWrapper>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
        </ListItemAvatar>
        <UserNameAndLastMessageTextWrapper>
          <Skeleton
            animation="wave"
            height={10}
            width="100%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton animation="wave" height={10} width="40%" />
        </UserNameAndLastMessageTextWrapper>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
        </ListItemAvatar>
        <UserNameAndLastMessageTextWrapper>
          <Skeleton
            animation="wave"
            height={10}
            width="100%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton animation="wave" height={10} width="40%" />
        </UserNameAndLastMessageTextWrapper>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
        </ListItemAvatar>
        <UserNameAndLastMessageTextWrapper>
          <Skeleton
            animation="wave"
            height={10}
            width="100%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton animation="wave" height={10} width="40%" />
        </UserNameAndLastMessageTextWrapper>
      </ListItem>
    </>
  );
};

export default SkeletonChatPanel;
