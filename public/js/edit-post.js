const editFormHandler = async event => {
    event.preventDefault();
    
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('input[name="content"]').value.trim();

const id = window.location.toString().split('/')[
    windown.location.toString().split('/').length - 1
];

const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
        title,
        content,
    }),
    headers: {
        "Content-Type": "application/json",
    },
});
console.log(response);
if (response.ok) {
    document.location.replace('/homepage')
}else{
    alert(response.statusText)
}
};

document
.querySelector('#update-post-btn')
.addEventListener("click", editFormHandler)