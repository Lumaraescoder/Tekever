import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardPokemon from '../../src/components/PokemonCard/PokemonCard'
import { makeStyles } from "@material-ui/core/styles";
import { getInfo } from "../../src/utils/utils";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    overflowX: "hidden",
  },
}));

export const Pokemon = () => {
  const router = useRouter();
  let id = router.query.id;
  const [url, setUrl] = useState();
  const [pokeName, setPokeName] = useState();
  const [nameAbility, setNameAbility] = useState();
  const [effect, setEffect] = useState();
  const [shortEffect, setShortEffect] = useState();
  const classes = useStyles();

  useEffect(() => {
    const data = async () => {
      const res = await getInfo(id);
      setUrl(res.url);
      setPokeName(res.pokeName);
      setNameAbility(res.nameAbility);
      setEffect(res.effect);
      setShortEffect(res.shortEffect);
    };
    data();
  }, [id]);

  return (
    <div className={classes.root}>
      <CardPokemon
        imgUrl={url}
        pokeName={pokeName}
        nameAbility={nameAbility}
        effect={effect}
        shortEffect={shortEffect}
      />
    </div>
  );
};


export default Pokemon;
