import { createTheme, ThemeProvider } from '@mui/material/styles';

const customizedMaterialStyle = {
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
          props: { status: 'draft' },
          style: {
            color: '#2D9CDB',
            backgroundColor: '#EBF6FF',
          },
        },
        {
          props: { status: 'draft', clickable: true },
          style: {
            '&:focus, &:hover': {
              color: '#028CDB',
              backgroundColor: '#F7FCFF',
            },
          },
        },
        {
          props: { status: 'processing' },
          style: {
            color: '#F2994A',
            backgroundColor: '#FEF5ED',
          },
        },
      ],
      styleOverrides: {
        root: {
          height: '24px',
        },
        label: {
          fontSize: '12px',
          lineHeight: '16px',
          padding: '4px 8px',
        },
      },
    },
  },
};

export const themeObject = createTheme(customizedMaterialStyle);

const PayMuiThemeJSX = ({ children }) => (
  <ThemeProvider theme={themeObject}>{children}</ThemeProvider>
);
export default PayMuiThemeJSX;
