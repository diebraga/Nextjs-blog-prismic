import { GetStaticProps } from 'next';
import NextLink from 'next/link';
import Header from '../components/Header';
import { FiCalendar, FiUser } from 'react-icons/fi'
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
    <main className={commonStyles.container}>
      <Header />

      <div className={styles.posts}>
        <NextLink href='/'>
          <a className={styles.post}>
            <strong>Title</strong>
            <p>exerpt</p>
            <ul>
              <li>
                <FiCalendar />
                Date
              </li>
              <li>
                <FiUser />
                Name user
              </li>
            </ul>
          </a>
        </NextLink>

        <NextLink href='/'>
          <a className={styles.post}>
            <strong>Title</strong>
            <p>exerpt</p>
            <ul>
              <li>
                <FiCalendar />
                Date
              </li>
              <li>
                <FiUser />
                Name user
              </li>
            </ul>
          </a>
        </NextLink>
        <button type='button'>
          load more posts...
        </button>
      </div>
    </main>
    </>
  )
}

// export const getStaticProps = async () => {
//   const prismic = getPrismicClient();
//   const postsResponse = await prismic.query(TODO);

// };
