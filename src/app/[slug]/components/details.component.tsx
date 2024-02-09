import moment from "moment";

const PostDetails = ({autor, createdAt}: any) => {
    return (
        <div className="w-full flex justify-between items-center xl:w-2/3">
            <p>Por <strong>{autor}</strong></p>
            <div>{moment(new Date(createdAt)).format('DD/MM/YYYY')}</div>
        </div>
    )
};

export default PostDetails;