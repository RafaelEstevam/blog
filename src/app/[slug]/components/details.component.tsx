import moment from "moment";

const PostDetails = ({autor, createdAt}: any) => {
    return (
        <div className="w-full flex justify-between items-center xl:w-2/3">
            <p className="text-white">Por <strong>{autor}</strong></p>
            <p className="text-white">{moment(new Date(createdAt)).format('DD/MM/YYYY')}</p>
        </div>
    )
};

export default PostDetails;