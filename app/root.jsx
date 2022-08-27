import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
export const meta = () => ({
  charset: "utf-8",
  title: "First App",
  viewport: "width=device-width,initial-scale=1",
});
function Layout() {
  return (
    <main>
      <header>
        <h1>
          <Link to="/posts"> Remix </Link>{" "}
        </h1>
      </header>
      <Outlet />
      <footer>
        <small>@ Copyright 2022</small>
      </footer>
    </main>
  );
}
export const links = () => [
  {
    rel: "stylesheet",
    href: "https://cdn.simplecss.org/simple.min.css",
  },
];
export default function App() {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
