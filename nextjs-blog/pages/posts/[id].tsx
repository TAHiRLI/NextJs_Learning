import React from "react";
import GetPostById, { getAllIds } from "../../lib/post";

export default function SinglePost({ data }) {

  let renderedPost = (<div className="card col-3 bg-success">
      <h3>{data?.title}</h3>
      <p className="mt-2">
        {data?.body}
      </p>

      <small>ID: {data?.id}</small>
    </div>
  )
  return <div className="row justify-content-center">
    {renderedPost}
  </div>;
}

export const getStaticPaths = async () => {

  let paths =await getAllIds();
  console.log(paths)
  return {
    paths,
    fallback: false,
  };    
};

export const  getStaticProps = async ({params}) => {
   let data = await  GetPostById(params.id)
  return { props: { data} };
};
