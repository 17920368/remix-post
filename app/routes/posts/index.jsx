import { Link, useLoaderData } from "@remix-run/react";
//fetching data with "loader"
export const loader = () => {
  const data = {
    posts: [
      {
        id: 1,
        title: "Post 1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: 2,
        title: "Post 2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: 3,
        title: "Post 3",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  };

  return data;
};

export default function Index() {
  const { posts } = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Hello Remix</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">Ir about</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/posts/create">Crear un post</Link>
          </li>
        </ul>
      </nav>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
