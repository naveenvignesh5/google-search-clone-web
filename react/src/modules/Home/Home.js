import React from 'react'

// ui components
import { Button, IconButton } from '@/ui/buttons'
import AppIcon from '@/ui/icons/AppIcon'
import Link from '@/ui/Link'

// utils
import Palette from '@/utils/palette'

// styles
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.topMenu}>
        <div className={styles.topMenuContainer}>
          <div className={styles.topMenuContent}>
            <div className={styles.rightSection}>
              <div className={styles.links}>
                <Link variant="dark" title="Gmail" />
                <Link variant="dark" title="Images" />
              </div>
              <div className={styles.appIcon}>
                <IconButton
                  icon={<AppIcon size={24} color={Palette.color.graniteGray} />}
                />
              </div>
              <div className={styles.signIn}>
                <Button fullWidth variant="primary" title="Sign in" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
