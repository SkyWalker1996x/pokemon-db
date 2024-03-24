// hooks
import usePokemonItem from 'features/pokemon/pokemonItem/usePokemonItem.ts';
// components
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// styles
import styles from 'features/pokemon/pokemonItem/styles.module.css';

const PokemonItemPage = () => {
  const { data, toPreviousPage } = usePokemonItem();

  return (
    <>
      {data !== null && (
        <Card className={styles.card}>
          <CardMedia className={styles.image} image={data.imageSrc} title="pokemon view" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={styles.name}>
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Base experience: {data.baseExperience}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Height: {data.baseExperience}
            </Typography>
            {data.stats.map(({ stat, base_stat }) => {
              return (
                <Typography key={stat.name} variant="body2" color="text.secondary">
                  <span className={styles.name}>{stat.name}</span>: {base_stat}
                </Typography>
              );
            })}
          </CardContent>
          <CardActions>
            <Button size="small" onClick={toPreviousPage}>
              ← Back
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default PokemonItemPage;
