// Reusable Dialog component using MUI
const { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Button } = MaterialUI;

function ReusableDialog({ open, onClose, title, children, actions, maxWidth = 'sm', ...props }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={maxWidth} fullWidth {...props}>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {title}
        {onClose && (
          <IconButton aria-label="close" onClick={onClose} size="small" sx={{ ml: 2, color: 'grey.400' }}>
            <span className="material-icons">close</span>
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
}

window.ReusableDialog = ReusableDialog;
