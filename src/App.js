import React from 'react';
import { 
  TextField, 
  Button, 
  Typography, 
  Link, 
  Grid, 
  Paper,
  InputAdornment,
  IconButton 
} from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d2691e', // Adjust this to the exact brown you want
    },
    background: {
      default: '#282c34', // Dark background color
    },
    text: {
      primary: '#000000', 
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '32px', textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              LOG IN FORM
            </Typography>
            <form>
              <TextField
                label="Username / E-mail Address"
                fullWidth
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Password"
                fullWidth
                margin="normal"
                variant="outlined"
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
              <Typography variant="body2" align="left" style={{ marginTop: 8 }}>
                Forgot Password? <Link href="#" color="primary">Click Here</Link>
              </Typography>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                fullWidth
                style={{ marginTop: 24, marginBottom: 16 }}
              >
                Log In
              </Button>
            </form>
            <Typography variant="body2">
              Not a member? <Link href="#" color="primary">Register Your Account</Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;