import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';
import { clsx } from 'clsx';


const FirstPost= ({data})=> {
  console.log(data)
  
  const renderedPosts = data.map(item=> {
    return <div className="card bg-light border border-dark p-3 col-3 bg-success ">
          <h4>{item.title}</h4>

          <p className='mt-2'>{item.body}</p>


    </div>
  })
  
  return (
    <Layout bgColor={"bg-danger"}>
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

        <section className='row gap-3 justify-content-center'>
          {renderedPosts}
        </section>
        <Link href="/">Back to home</Link>
      </div>
    </Layout>
  );
}

export default FirstPost;

// https://jsonplaceholder.typicode.com/posts

export async function getStaticProps(){

 let  data:any = "saalm";
await fetch('https://jsonplaceholder.typicode.com/posts')
 .then((response) => response.json())
 .then((json) => data =  json);

 return {
  props:{
    data
  }
 }
}