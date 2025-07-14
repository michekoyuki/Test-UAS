"use client";

import useSWR from "swr";
export default function NewsPage() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data: users, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/posts`, fetcher);
  
  if (isLoading) { 
     return  (
    <div> 
      <p>loading...</p> 
    </div>
  );
}

    if (error) { 
      return (
    <div> 
      <p>Gagal mengambil data</p> 
    </div>
  );
}

console.log(post);

  return ( 
    <div className="flex flex-col gap-3">
      {post.map((post, index) => (
        <div className="p-4 border-2 border-slate-200 rounded-lg" key={index}>
          <p>{post.title}</p>
        </div>
      ))}     
    </div>
  );
}