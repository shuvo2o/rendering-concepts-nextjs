import React, { Suspense } from 'react'
import Comments from './Comments';
type Post={
   userId:number,
    id:number,  
    title:string,
    body:string
}
async function getPost(id: string):Promise<Post> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {cache: 'no-store'});
    return res.json();
}
const Postpage = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
    const post = await getPost(id);
    console.log(post);

  return (
    <div>
      <div className='max-w-7xl container mx-auto py-8 px-4'>
        <h1 className='text-3xl font-bold mb-4 capitalize'>Post Title: {post.title}</h1>
        <p className='text-white'>Post body: {post.body}</p>
      <h3 className='text-lg font-semibold text-blue-500 underline underline-offset-4'>Comment</h3>

      
      <Suspense fallback={<p>Loading Comments...</p>}>
        <Comments postID={id}/>
      </Suspense>
      </div>
    </div>
  )
}

export default Postpage
