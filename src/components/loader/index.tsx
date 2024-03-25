// components
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// styles
import styles from 'components/loader/styles.module.css';

const Loader = () => {
  return (
    <Box className={styles.wrapper}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
