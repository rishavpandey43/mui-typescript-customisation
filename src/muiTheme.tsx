import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/Chip' {
  // @ts-ignore
  interface ChipProps {
    square?: boolean;
    type?: 'draft' | 'processing';
    clickable?: boolean;
  }
}

export const themeObject = createTheme({
  components: {
    MuiChip: {
      variants: [
        {
          props: { square: true },
          style: {
            borderRadius: '4px',
          },
        },
        {
          props: { type: 'draft' },
          style: {
            color: '#2D9CDB',
            backgroundColor: '#EBF6FF',
          },
        },
        {
          props: { type: 'draft', clickable: true },
          style: {
            '&:focus, &:hover': {
              color: '#028CDB',
              backgroundColor: '#F7FCFF',
            },
          },
        },
        {
          props: { type: 'processing' },
          style: {
            color: '#F2994A',
            backgroundColor: '#FEF5ED',
          },
        },
      ],
    },
  },
});

interface PayMuiThemeType {
  children: React.ReactNode;
}

const MuiTheme = ({ children }: PayMuiThemeType) => (
  <ThemeProvider theme={themeObject}>{children}</ThemeProvider>
);

export default MuiTheme;
