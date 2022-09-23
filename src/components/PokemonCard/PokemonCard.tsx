import { makeStyles } from "@material-ui/core/styles";
import { Button} from "@material-ui/core";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

const useStyles = makeStyles((theme) => ({
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

function CardPokemon({ imgUrl, pokeName, nameAbility, effect, shortEffect }) {
  const classes = useStyles();

  return (
    <div className={classes.divCard}>
      <div className={classes.btnBack}>
        <Button onClick={() => window.history.back()}>
 
          <ArrowBackRoundedIcon />{" "}
        </Button>
      </div>
      {imgUrl ? <div className={classes.img}>
        <img src={imgUrl} />
      </div> :
      <div className={classes.img}>
        <h3>Loading</h3>
      </div>}
      <ul className={classes.ul}>
        <li className={classes.li}>
          <h3>Name: </h3>
          <p>{pokeName}</p>
        </li>
        <li className={classes.li}>
          <h3>Hability: </h3>
          <p>{nameAbility}</p>
        </li>
        <li className={classes.li}>
          <h3>Effect: </h3>
          <p> {effect}</p>
        </li>
        <li className={classes.li}>
          <h3>Short Effect: </h3>
          <p>{shortEffect}</p>
        </li>
      </ul>
    </div>
  );
}

export default CardPokemon;
