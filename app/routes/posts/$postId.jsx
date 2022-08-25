import { useParams } from "@remix-run/react";

export default function SinglePost() {
  const params = useParams(); //get url params
  return (
    <>
      <h2>Post title {params.postId} </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis
        totam earum quaerat est aut iure velit similique dignissimos, nisi
        tenetur optio repudiandae ipsum ducimus blanditiis reiciendis illo dolor
        enim?
      </p>
    </>
  );
}
