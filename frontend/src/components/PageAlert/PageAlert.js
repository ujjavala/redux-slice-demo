import React from 'react'
import styles from './PageAlert.module.scss'

const PageAlert = ({ notification }) => {
  return (
    <div>
      {notification.map((item, index) => {
        return (
          Object.keys(item).length && (
            <div className={styles.alert}>
              <span className={styles.closebtn}></span>
              {item.message}
            </div>
          )
        )
      })}
    </div>
  )
}

export default PageAlert
