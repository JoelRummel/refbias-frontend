import useRequest from "./useRequest";

const useCommentApiRequest = () => {
    const { post } = useRequest();

    const likeComment = (postId, commentId) =>
        post(`/comments/${postId}/${encodeURIComponent(commentId)}/like`);

    return {
        likeComment
    };
};

export default useCommentApiRequest;