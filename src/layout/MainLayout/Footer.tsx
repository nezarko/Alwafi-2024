import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link, Stack, Typography } from '@mui/material';

// ==============================|| MAIN LAYOUT - FOOTER ||============================== //

const Footer = () => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
    <Typography variant="caption">&copy; Alwafi Pro ♥ crafted by Route Solutions</Typography>
    <Stack spacing={1.5} direction="row" justifyContent="space-between" alignItems="center">
      <Link component={RouterLink} to="https://ableproadmin.com" target="_blank" variant="caption" color="textPrimary">
        Home
      </Link>
      <Link
        component={RouterLink}
        to="https://phoenixcoded.gitbook.io/able-pro/v/react/"
        target="_blank"
        variant="caption"
        color="textPrimary"
      >
        Documentation
      </Link>
      <Link component={RouterLink} to="https://phoenixcoded.authordesk.app/" target="_blank" variant="caption" color="textPrimary">
        Support
      </Link>
    </Stack>
  </Stack>
);

export default Footer;
