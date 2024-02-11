import React from 'react'
import FictSelect from './FictSelect'
import styles from "./NamedFictSelect.module.scss"
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function NamedFictSelect({title, options, selectID, selectLabel, register, name}) {
  return (
    <div>
        <div className={styles.wrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.selectWrapper}>
                <div className={styles.selectComp}>
                    <FictSelect options={options} selectID={selectID} selectLabel={selectLabel} register={register} name={name} />
                </div>
                <div className={styles.timeComp}><AccessTimeIcon style={{
                    position: "relative",
                    top: "6px",
                    marginRight: "5px"
                }}/></div>
            </div>
        </div>
    </div>
  )
}

export default NamedFictSelect