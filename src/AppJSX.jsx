import Stack from '@mui/material/Stack';

import Chip from '@mui/material/Chip';

import PayMuiThemeJSX from './payMuiThemeJSX';

function App() {
  return (
    <PayMuiThemeJSX>
      <Stack m={5} spacing={2} direction="row">
        <Chip label="Square Chip" square />
        <Chip label="Draft Chip" status="draft" clickable />
        <Chip label="Processing Chip" status="processing" />
      </Stack>
    </PayMuiThemeJSX>
  );
}

export default App;
