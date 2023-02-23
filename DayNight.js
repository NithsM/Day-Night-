import  React,{useContext,useState,useMemo,createContext} from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
   
    <Box
      sx={{
        display: {xs:"flex", md:'flex'},
        width: '100%',
        alignItems: 'Top',
        justifyContent: 'right',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 2,
        height:'600px'
        
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 ,marginBottom:'542px'}} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <BrightnessHighIcon /> : <Brightness3Icon />}
      </IconButton>
    </Box>
    
  );
}

 function DayNight() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export default DayNight