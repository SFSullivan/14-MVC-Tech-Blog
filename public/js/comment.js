const commentFormHandler = async event => {
    even.preventDefault();

    const commentContent = document
    .querySelector('input[name="comment-body"]')
    .value.trim();

    const postId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1];

        if (comment_text) {
            const response = await fetch(`/api/comments/`, {
                method: "POST",
                body: JSON.stringify({
                    postId,
                    commentContent,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                document.location.reload();
            }else{
                alert(response.statusText)
            }
        }
    }

    document
    .querySelector()
    .addEventListener("submit", commentFormHandler);l