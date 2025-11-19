import React from 'react'
interface CommentsProps {
    id: number,
    postID: number,
    name: string,
    email: string,
    body: string

}
const Comments = async ({ postID }: { postID: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`, { cache: 'no-store' });
    const comments = await res.json();
    console.log(comments);
    return (
        <div className='space-y-2 mt-4'>
            {comments.map((comment: CommentsProps) => (
                <div key={comment.id} className="border-b border-gray-500 pb-5">
                    <p className="font-semibold">{comment.name}</p>
                    <p>{comment.body}</p>
                    <p className="text-sm text-gray-500">{comment.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Comments
