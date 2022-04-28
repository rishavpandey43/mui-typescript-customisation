import PayMuiTheme from './theme/theme';
import { StyledEngineProvider } from '@mui/material/styles';

import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <PayMuiTheme>
        <Stack m={5} spacing={2} direction="row">
          <Button variant="contained">Default</Button>
          <Button variant="dashed">Dashed</Button>
        </Stack>
      </PayMuiTheme>
    </StyledEngineProvider>
  );
}

export default App;
