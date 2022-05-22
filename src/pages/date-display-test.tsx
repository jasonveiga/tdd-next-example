import type { NextPage } from 'next';
import Head from 'next/head';
import DateDisplay from '@/components/DateDisplay';
import styles from '../styles/Home.module.css';

const DateDisplayTest: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Trivial Date/Time Display</title>
      <meta
        name="description"
        content="Place to test the date display component"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <DateDisplay value={new Date(Date.now())} />
    </main>
  </div>
);

export default DateDisplayTest;
