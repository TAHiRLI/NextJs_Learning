import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost:React.FC = ()=> {
  return (
    <Layout>
    <Head>
      <title>Postlar</title>
    </Head>
      <div>

        <div>
          {/* <img src="/images/profile.jpeg" alt="profile " /> */}
          <Image
            src="/images/profile.jpeg"
          width={400}
          height={400}
            loading='lazy'
            placeholder={'blur'}
            blurDataURL='/vercel.svg'
            alt='tahir tahrli'
            

          />
        </div>
        <Link href="/">Back to home</Link>
      </div>
    </Layout>
  );
}

export default FirstPost;