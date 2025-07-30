// Reusable Panel component using MUI
const { Paper, Box, Typography } = MaterialUI;

function ReusablePanel({ title, subtitle, children, onClick, sx, ...props }) {
  return (
    <Paper elevation={3} sx={{ p: 2, mt: 2, bgcolor: '#2d3561', cursor: onClick ? 'pointer' : 'default', ...sx }} onClick={onClick} {...props}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography fontWeight={600} color="#fff">{title}</Typography>
        {subtitle && <Typography fontWeight={600} color="#fff">{subtitle}</Typography>}
      </Box>
      {children}
    </Paper>
  );
}

window.ReusablePanel = ReusablePanel;
