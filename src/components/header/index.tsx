import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// styles
import styles from 'components/header/styles.module.css';
import logo from 'components/header/assets/pokeball-logo.png'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.header_wrapper}>
      <AppBar position="static" className={styles.header}>
        <Toolbar>
          <img src={logo} alt="pokemon logo" className={styles.image}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokemon DB
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
