import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    divCard: {
      height: "100vh",
      margin: "1rem auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textTransform: "capitalize",
      fontSize: "18px"
    },
    btnBack: {
      alignSelf: "start",
      padding: "1rem",
    },
    img: {
      width: "150px",
      height: "150px",
      "& img": {
        width: "inherit",
        height: "inherit",
      },
    },
    ul: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      margin: "0",
      padding: "0",
      width: "inherit",
      textAlign: "justify",
    },
    li: {
      padding: "5px 10px",
      borderRadius: "10px",
      marginBottom: "1rem",
      backgroundColor: theme.palette.secondary.main,
      [theme.breakpoints.down('xs')]: {
        width: "300px",
      },
      width: "60vh",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      "& p": {
        margin: "0",
        padding: "0 0 0 5px",
      },
    },
  }));