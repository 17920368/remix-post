import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/services/db";
//fetching data with "function loader"
export const loader = async () => {
  //connect wirh db for DATA
  const posts = await db.post.findMany();
  return { posts };
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
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
