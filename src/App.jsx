import { useState } from 'react'
import Button from '@mui/material/Button';

import DocUploadModal from './components/DocUploadModal'
import styles from "./App.module.scss"


function App() {
  const [open, setOpen] = useState(false)

  const handleModalOpenClose = () => {
    setOpen(!open)
  }

  return (
    <div className={styles.app}>
      <Button variant="outlined" onClick={handleModalOpenClose}>
        Upload Document
      </Button>
      <DocUploadModal handleModalOpenClose={handleModalOpenClose} open={open} />
    </div>
  )
}

export default App
