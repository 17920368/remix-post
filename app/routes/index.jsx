import { Link } from "@remix-run/react";

export default function Index() {
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
    </div>
  );
}
