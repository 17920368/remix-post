import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStyles from "~/styles/global.css";
export const meta = () => ({
  charset: "utf-8",
  title: "First App",
  viewport: "width=device-width,initial-scale=1",
});
function Layout() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>Remix</h1>
        </Link>
      </header>
      <Outlet />
      <footer>
        <small>@ Copyright 2022</small>
      </footer>
    </>
  );
}
export const links = () => [
  {
    rel: "stylesheet",
    href: globalStyles,
  },
  {
    rel: "stylesheet",
    href: "https://cdn.simplecss.org/simple.min.css",
  },
];
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />

        <Links />
      </head>

      <body>
        <Layout></Layout>
        <ScrollRestoration />

        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}
