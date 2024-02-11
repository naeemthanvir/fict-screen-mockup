import { useState } from 'react'
import Button from '@mui/material/Button';

import DocUploadModal from './components/DocUploadModal'
import styles from "./App.module.scss"
import FictButton from './components/FictButton';


function App() {
  const [open, setOpen] = useState(false)

  const handleModalOpenClose = () => {
    setOpen(!open)
  }

  return (
    <div className={styles.app}>
      <div className={styles.modalOpenBtn}>
        <p>Click below to open modal</p>
        <FictButton variant={"contained"} btnText={"Upload Document"} handleClick={handleModalOpenClose} />
      </div>
      <DocUploadModal handleModalOpenClose={handleModalOpenClose} open={open} />
    </div>
  )
}

export default App
