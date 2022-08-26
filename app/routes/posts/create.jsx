import { redirect } from "@remix-run/node";
import { useTransition, Form } from "@remix-run/react";
import { db } from "~/services/db";

// get formData with "action"
export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");
  const post = await db.post.create({ data: { body, title } });
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return redirect(`/posts/${post.id}`);
};
export function ErrorBoundary({ error }) {
  return (
    <div>
      <strong>Algo salió mal: {error.message}</strong>
    </div>
  );
}
export default function CreatePost() {
  const transition = useTransition();
  return (
    <Form method="POST" disabled={transition.state === "submitting"}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea type="text" id="body" name="body" />
      </div>
      <button type="submit">
        {transition.state === "submitting" ? "Wait for it ..." : "Create post"}
      </button>
    </Form>
  );
}
