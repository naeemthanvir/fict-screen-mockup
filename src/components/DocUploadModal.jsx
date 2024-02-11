import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form"
import FictButton from "./FictButton"
import FictSelect from "./FictSelect"
import FileImport from './FileImport';
import RadioBtns from "./RadioBtns"
import Dash from "./Dash"
import TitleAndText from "./TitleAndText"
import ToggleAndText from "./ToggleAndText"
import NamedFictSelect from './NamedFictSelect';
import styles from "./DocUploadmodal.module.scss"

function DocUploadModal({handleModalOpenClose, open}) {
    const {register, handleSubmit, control, setValue} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    const scheduleRadioValue = [
        {
            value: "yes",
            label: "Yes"
        },
        {
            value: "no",
            label: "No"
        }
    ]

    const clientRadioValue = [
        {
            value: "single",
            label: "Single"
        },
        {
            value: "multiple",
            label: "Multiple"
        }
    ]

    const selectOptions = [
        {
            value: "test item 1",
            label: "Test Item 1"
        },
        {
            value: "test item 2",
            label: "Test Item 2"
        },
        {
            value: "test item 3",
            label: "Test Item 3"
        },
        {
            value: "test item 4",
            label: "Test Item 4"
        },
        {
            value: "test item 5",
            label: "Test Item 5"
        },
    ]
    return (
        <Dialog sx={{
            "& .MuiPaper-root": {
                borderRadius: "20px",
                maxHeight: "calc(100% - 40px)"
            }
        }} open={open} onClose={handleModalOpenClose} maxWidth="lg">
            <DialogTitle sx={{
                "&.MuiDialogTitle-root":{
                    padding: "10px 24px",
                    position: "relative",
                    top: "8px"
                }
            }}>
                <span className={styles.modalXbtn} onClick={handleModalOpenClose}>X</span>
            </DialogTitle>
            <DialogContent className={styles.container}>
                <h2>Document Upload</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container justifyContent="center" spacing={7}>
                        <Grid item xs={6}>
                            <FictSelect options={selectOptions} selectID={"import-name"} selectLabel={"Select Import Name:"} register={register} name={"selectImport"}/>
                            <Dash />
                            <FileImport title={"Select a manifest that you'd like to import"} control={control} setValue={setValue} name={"fileImport"} />
                            <Dash />
                            <TitleAndText title={"Elapse data checking"} text={"No elapsed dates"} />
                            <Dash />
                            <ToggleAndText title={"Tolerance Window:"} toggleText={"Toggle On"} secondText={"Select Tolerance Level"} register={register} name={"toleranceWindow"} />
                        </Grid>
                        <Grid item xs={5}>
                            <RadioBtns key={"first-radio_opt"} name={"splitSched"} options={scheduleRadioValue} register={register}/>
                            <Dash />
                            <TitleAndText title={"Location Checking"} text={"All Available"} />
                            <Dash />
                            <RadioBtns key={"second-radio_opt"} name={"clientCount"} options={clientRadioValue} register={register}/>
                            <NamedFictSelect title={"Testing Center 1"} options={selectOptions} selectID={"cl-1"} selectLabel={"Select Client"} register={register} name={"testCl1"} />
                            <NamedFictSelect title={"Testing Center 2"} options={selectOptions} selectID={"cl-2"} selectLabel={"Select Client"} register={register} name={"testCl2"} />
                            <NamedFictSelect title={"Testing Center 3"} options={selectOptions} selectID={"cl-3"} selectLabel={"Select Client"} register={register} name={"testCl3"} />
                            <NamedFictSelect title={"Testing Center 4"} options={selectOptions} selectID={"cl-4"} selectLabel={"Select Client"} register={register} name={"testCl4"} />
                        </Grid>
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

