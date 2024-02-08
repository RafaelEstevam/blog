import Link from 'next/link';

const PostList = ({postsList, list, origin = ""}:any) => {

    const grid = 4;

    return (
        <>
            {postsList.map((post:any, index:number) => (
                <>
                    {
                        
                        (index == 0 || index % grid == 0) && !list &&(
                            <div className={`w-1/2 pr-10 pb-10`} key={post.title}>
                                <div className="p-16 flex flex-col rounded-2xl bg-slate-800 justify-between h-80">
                                    <div className='flex flex-col gap-2 justify-start'>
                                        <Link href={`${origin}/${post.slug}`}>
                                            <h2 className="text-5xl font-bold">{post.title}</h2>
                                        </Link>
                                        <div className='flex gap-4 pt-2'>
                                            {post.categories?.map((category: any) => (
                                                <p className='bg-slate-500 p-1 rounded-2xl text-xs' key={category}>{category}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <p>{post.shortText}</p>
                                </div>
                            </div>

                        )
                    }

                    {
                        (index != 0 && index % grid != 0) && !list && (
                            <div className={`w-1/4 pr-10 pb-10`} key={post.title}>
                                <div className="p-16 flex flex-col rounded-2xl bg-slate-800 justify-between h-80">
                                    <Link href={`${origin}/${post.slug}`}>
                                        <h3 className="text-3xl font-bold">{post.title}</h3>
                                    </Link>
                                    <div className='flex gap-4 pt-2'>
                                        {post.categories?.map((category: any) => (
                                            <p className='bg-slate-500 p-1 rounded-2xl text-xs' key={category}>{category}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {list && (
                        <div className={`w-full`} key={post.title}>
                            <div className="p-8 flex flex-col rounded-2xl bg-slate-800 justify-between">
                                <Link href={`${origin}/${post.slug}`}>
                                    <h3 className="text-3xl font-bold">{post.title}</h3>
                                </Link>
                                <div className='flex gap-4 pt-2'>
                                    {post.categories?.map((category: any) => (
                                        <p className='bg-slate-500 p-1 rounded-2xl text-xs' key={category}>{category}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ))}
        </>
    )
};

export default PostList;