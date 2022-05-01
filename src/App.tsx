import Stack from '@mui/material/Stack';

import Chip from '@mui/material/Chip';

import MuiTheme from './muiTheme';

function App() {
  return (
    <MuiTheme>
      <Stack m={5} spacing={2} direction="row">
        {/* @ts-ignore */}
        <Chip label="Square Chip" square />
        {/* @ts-ignore */}
        <Chip label="Draft Chip" type="draft" clickable />
        {/* @ts-ignore */}
        <Chip label="Processing Chip" type="processing" />
      </Stack>
    </MuiTheme>
  );
}

export default App;
