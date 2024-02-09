import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';

import FictButton from "./FictButton"
import styles from "./DocUploadmodal.module.scss"

function DocUploadModal({handleModalOpenClose, open}) {
    return (
        <Dialog 
            open={open}
            onClose={handleModalOpenClose}
            maxWidth="md"
        >
            <DialogTitle id="alert-dialog-title">
                <span className={styles.modalXbtn} onClick={handleModalOpenClose}>X</span>
            </DialogTitle>
            <DialogContent className={styles.container}>
                <h2>Document Upload</h2>
                <Grid container spacing={4}>
                    <Grid item sm={8}>TEST</Grid>
                    <Grid item sm={4}>TEST</Grid>
                </Grid>
                <p className={styles.instruction}><strong>Data n the import file is correct. Please Press continue to import.</strong></p>
                <div className={styles.btnsWrapper}>
                    <FictButton variant={"contained"} btnText={"Continue Import"} onClick={() => {}}/>
                    <FictButton variant={"outlined"} btnText={"Cancel"} onClick={() => {}}/>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DocUploadModal

