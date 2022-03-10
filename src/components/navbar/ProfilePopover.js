import { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { Badge, Box, ButtonBase, Divider, styled } from "@mui/material";

import FlexBox from "../layout/FlexBox";
import { H6, Small, Tiny } from "../layout/Typography";
import CustomAvatar from "../layout/CustomAvatar";

import PopoverLayout from "./PopoverLayout";

// styled components
const StyledSmall = styled(Small)(({ theme }) => ({
  display: "block",
  padding: "5px 1rem",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.secondary.light
        : theme.palette.divider,
  },
}));

const ProfilePopover = () => {
  const anchorRef = useRef(null);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleMenuItem = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <Fragment>
      <ButtonBase disableRipple ref={anchorRef} onClick={() => setOpen(true)}>
        <Badge
          overlap="circular"
          variant="dot"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          sx={{
            "& .MuiBadge-badge": {
              width: 11,
              height: 11,
              right: "7%",
              borderRadius: "50%",
              border: "2px solid #fff",
              backgroundColor: "success.main",
            },
          }}
        >
          <CustomAvatar
            src={"/static/img/dummy.svg"}
            sx={{
              width: 30,
              height: 30,
              ml: 1,
            }}
          />
        </Badge>
      </ButtonBase>

      <PopoverLayout
        hiddenViewButton
        maxWidth={230}
        minWidth={200}
        popoverOpen={open}
        anchorRef={anchorRef}
        popoverClose={() => setOpen(false)}
        title={
          <FlexBox alignItems="center">
            <CustomAvatar
              src={"/static/img/dummy.svg"}
              sx={{
                width: 35,
                height: 35,
              }}
            />

            <Box ml={1}>
              <H6>{"Oleg"}</H6>
              <Tiny display="block" fontWeight={500} color="text.disabled">
                {"oleg@stakecube.net"}
              </Tiny>
            </Box>
          </FlexBox>
        }
      >
        <Box pt={1}>
          <StyledSmall
            onClick={() => handleMenuItem("")}
          >
            Security
          </StyledSmall>

          <StyledSmall
            onClick={() => handleMenuItem("")}
          >
            Preferences
          </StyledSmall>

          <StyledSmall
            onClick={() => handleMenuItem("")}
          >
            Verification
          </StyledSmall>

          <StyledSmall onClick={() => handleMenuItem("")}>
            Referrals
          </StyledSmall>

          <StyledSmall onClick={() => handleMenuItem("")}>
            Notification Center
          </StyledSmall>

          <StyledSmall onClick={() => handleMenuItem("")}>
            API Management
          </StyledSmall>

          <Divider
            sx={{
              my: 1,
            }}
          />

          <StyledSmall
            onClick={() => {
              toast.error("You Logout Successfully");
            }}
          >
            Sign Out
          </StyledSmall>
        </Box>
      </PopoverLayout>
    </Fragment>
  );
};

export default ProfilePopover;
