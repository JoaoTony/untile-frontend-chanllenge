'use client'
import {FC} from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { NAV_LINKS, selectedStyle } from './utils';

const NavBar: FC = () => {
  const pathname = usePathname();

  return(
    <div className={styles.container}>
      <div className={styles.ul}>
        {NAV_LINKS.map(li => (
          <Link
            href={`${li.url}`}
            key={li.url}
            className={selectedStyle(pathname?.includes(li.url))}
          >
            {li.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavBar