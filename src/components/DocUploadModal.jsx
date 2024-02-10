import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form"

import FictButton from "./FictButton"
import FictSelect from "./FictSelect"
import FileImport from './FileImport';
import Dash from "./Dash"
import styles from "./DocUploadmodal.module.scss"

function DocUploadModal({handleModalOpenClose, open}) {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <Dialog open={open} onClose={handleModalOpenClose} maxWidth="lg">
            <DialogTitle id="alert-dialog-title">
                <span className={styles.modalXbtn} onClick={handleModalOpenClose}>X</span>
            </DialogTitle>
            <DialogContent className={styles.container}>
                <h2>Document Upload</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container justifyContent="center" spacing={6}>
                        <Grid item xs={6}>
                            <FictSelect options={[]} selectID={"import-name"} selectLabel={"Select Import Name:"} register={register} name={"selectImport"}/>
                            <Dash />
                            <FileImport />
                        </Grid>
                        <Grid item xs={5}>TEST</Grid>
                    </Grid>
                    <p className={styles.instruction}><strong>Data in the import file is correct. Please Press continue to import.</strong></p>
                    <div className={styles.btnsWrapper}>
                        <FictButton variant={"contained"} btnText={"Continue Import"} type="submit"/>
                        <FictButton variant={"outlined"} btnText={"Cancel"} handleClick={handleModalOpenClose}/>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DocUploadModal

