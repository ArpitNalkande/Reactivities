import Group from "@mui/icons-material/Group";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
// import { NavLink } from "react-router";
// import MenuItemLink from "../shared/components/MenuItemLink";
// import { Observer } from "mobx-react-lite";
// import { useStore } from "../../lib/hooks/useStore";
// import { useAccount } from "../../lib/hooks/useAccount";
// import UserMenu from "./UserMenu";

type Props = {
  openForm: () => void;
};

export default function NavBar({ openForm }: Props) {
  //   const { uiStore } = useStore();
  //   const { currentUser } = useAccount();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <MenuItem sx={{ display: "flex", gap: 2 }}>
                <Group fontSize="large" />
                <Typography variant="h4" fontWeight="bold">
                  Reactivities
                </Typography>
              </MenuItem>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <MenuItem
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Activities
              </MenuItem>

              <MenuItem
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                About
              </MenuItem>

              <MenuItem
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Contact
              </MenuItem>
            </Box>

            <Button size="large" variant="contained" color="warning" onClick={openForm}>
              Create Activity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
