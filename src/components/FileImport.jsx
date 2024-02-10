import {useDropzone} from 'react-dropzone';
import FictButton from "./FictButton"
import styles from "./FileImport.module.scss"
import TextSnippetSharpIcon from '@mui/icons-material/TextSnippetSharp';

function FileImport() {
    const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
        noClick: true,
        noKeyboard: true
      });
    
      const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));
    
      return (
        <div className="container">
          <div {...getRootProps({className: styles.dropzone})}>
            <input {...getInputProps()} />
            <p onClick={open} className={styles.dropzoneArea}>
                <TextSnippetSharpIcon /><br/>
                Drag 'n' drop some files here
            </p>
            <div className={styles.fileBtnWrapper}>
                <FictButton variant={"contained"} btnText={"Upload Manifest"} handleClick={open} />
            </div>
          </div>
          <div>
            <ul>{files}</ul>
          </div>
        </div>
      );
}

export default FileImport