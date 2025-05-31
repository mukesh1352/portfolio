import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

export default function Hero() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
      }}
    >
      <Avatar
        alt="Cindy Baker"
        src="/Image.png"
        sx={{ width: 120, height: 120, borderRadius: '50%' }}
      />
    </Box>
  );
}
