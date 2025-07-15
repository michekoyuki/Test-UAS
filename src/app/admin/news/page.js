"use client";

import useSWR from "swr";
export default function NewsPage() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data: posts, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/posts`, fetcher);
  
  if (isLoading) { 
     return  (
    <div className="flex items-center justify-center h-full"> 
      <p>Loading...</p> 
    </div>
  );
}

    if (error) { 
      return (
    <div className="flex items-center justify-center h-full"> 
      <p>Gagal mengambil data</p> 
    </div>
  );
}

console.log(posts);

  return ( 
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">News</h1>
      <div className="flex flex-col gap-3">
        {posts?.map((post, index) => (
          <div className="p-4 border-2 border-slate-200 rounded-lg hover:border-gray-400 transition-colors" key={index}>
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{post.body}</p>
          </div>
        ))}     
      </div>
    </div>
  );
}