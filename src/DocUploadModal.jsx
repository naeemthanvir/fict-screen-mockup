import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styles from "./DocUploadmodal.module.scss"

function DocUploadModal({handleModalOpenClose, open}) {
    return (
        <Dialog 
            open={open}
            onClose={handleModalOpenClose}
        >
            <DialogTitle id="alert-dialog-title">
                <span className={styles.modalXbtn} onClick={handleModalOpenClose}>X</span>
            </DialogTitle>
            <DialogContent className={styles.container}>
                test
            </DialogContent>
        </Dialog>
    )
}

export default DocUploadModal

