const PostShare = async ({slug}: any) => {
    return (
        <div className='flex gap-4 justify-start w-full xl:w-2/3 xl:justify-center text-white'>
            <h4 className='font-bold text-white'>Compartilhar em: </h4>
            <a className="text-white" href={`https://www.linkedin.com/shareArticle?mini=true&url=${'https://rafaelestevam.netlify.app'}/${slug}`}>Linkedin</a>
        </div>
    )
};

export default PostShare;