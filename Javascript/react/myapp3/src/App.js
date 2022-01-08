import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Chip } from '@mui/material';
import Icon from '@mui/material/Icon';
import { AccessAlarm, ThreeDRotation, HomeIcon } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SignalWifi2BarIcon from '@mui/icons-material/SignalWifi2Bar';

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <a href="https://github.com/SaroshAhmed22/my_hookess_work/blob/master/src/Resturant/menuItems.js"><Button variant="contained">Contained</Button></a>
      <Button variant="outlined">Outlined</Button>
      <br />
      <br />
      <ButtonGroup disableElevation variant="contained">

        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>

      <YouTubeIcon></YouTubeIcon>
      <SignalWifi2BarIcon style={{ color: 'red' }}></SignalWifi2BarIcon>

    </div>
  );
}

export default App;
