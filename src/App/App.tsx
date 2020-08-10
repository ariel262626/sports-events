import React from 'react';
import 'fontsource-roboto';
import Map from "../components/map/map";
import MyButton from "../components/button/button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
    },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
        <span className={classes.button}>
            <MyButton size={'small'} text={'Add place'}/>
        </span>
        <Map/>
    </div>
  );
}
