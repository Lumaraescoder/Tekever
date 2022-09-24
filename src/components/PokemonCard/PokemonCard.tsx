import { Button } from "@material-ui/core";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { useStyles } from "./PokemonStyles";

type Props = {
  imgUrl: string | undefined;
  pokeName: React.ReactNode;
  nameAbility: React.ReactNode;
  effect: React.ReactNode;
  shortEffect: React.ReactNode;
}

export const CardPokemon: React.FC<Props> = ({ imgUrl, pokeName, nameAbility, effect, shortEffect }) => {
  const classes = useStyles();

  return (
    <div className={classes.divCard}>
      <div className={classes.btnBack}>
        <Button onClick={() => window.history.back()}>
          <ArrowBackRoundedIcon />
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