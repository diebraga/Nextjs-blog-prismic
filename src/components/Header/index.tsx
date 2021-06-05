import NextLink from 'next/link';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <NextLink href='/'>
        <a>
          <img 
            src='/images/logo.svg' 
            alt='img logo'
          />
        </a>
      </NextLink>
    </header>
  )
}
