import {useDropzone} from 'react-dropzone';
import { Controller } from "react-hook-form"
import FictButton from "./FictButton"
import styles from "./FileImport.module.scss"
import TextSnippetSharpIcon from '@mui/icons-material/TextSnippetSharp';
import TaskRoundedIcon from '@mui/icons-material/TaskRounded';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

function FileImport({title, control, setValue, name}) {
    const {getRootProps, getInputProps, open, acceptedFiles, getFilesFromEvent} = useDropzone({
        noClick: true,
        noKeyboard: true,
        onDrop: (e) => setValue(name, e[0])
      });
    

    const BorderLinearProgress = styled(LinearProgress)(() => ({
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: "#d7d7d7",
        },
        [`& .${linearProgressClasses.bar}`]: {
          backgroundColor: "#f99d25",
        },
      }));

    const files = acceptedFiles.map((file) => {
        const fileSize = Math.round(10 * (file.size / 1000)) /10
        return (
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px",
                borderTop: "1px solid #d7d7d7",
                borderBottom: "1px solid #d7d7d7",
                margin: "15px 0 5px",
                }} 
            key={file.path}>
                <div style={{color: "#f99d25", paddingTop: "15px", paddingRight: "10px"}}>
                    <TaskRoundedIcon />
                </div>
                <div style={{width: "370px", fontSize: "12px", color: "#d7d7d7"}}>
                    <span>{file.path}</span> <span style={{float: "right", color: "#b2b2b2"}}><strong>{fileSize}MB</strong></span>
                    <BorderLinearProgress variant="determinate"  value={fileSize} />
                </div>
            </div>
        )
    })
    
      return (
        <div className={styles.wrapper}>
          <p style={{
            margin: "0 0 7px"
          }}
          ><strong>{title}</strong>
          </p>
            <Controller 
                name={name}
                control={control}
                render={() =>
                    <div {...getRootProps({className: styles.dropzone})}>
                        <input {...getInputProps()}/>
                        <p onClick={open} className={styles.dropzoneArea}>
                            <TextSnippetSharpIcon /><br/>
                            Drag & drop here or <strong>Browse</strong>
                        </p>
                        <div className={styles.fileBtnWrapper}>
                            <FictButton variant={"contained"} btnText={"Upload Manifest"} handleClick={open} />
                        </div>
                    </div>
                }
            />
          <div>
            <div>{files}</div>
          </div>
        </div>
      );
}

export default FileImport