import { json, redirect } from "@remix-run/node";
import { useTransition, Form, useActionData } from "@remix-run/react";
import { db } from "~/services/db";
//error
const badRequest = (data) => {
  return json(data, { status: 400 });
};

// get formData with "action"
export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");
  //validate request
  const fieldErrors = {
    title: title.length < 3 ? "Title must be at least 3 characters" : null,
    body: body.length < 10 ? "Title must be at least 10 characters" : null,
  };
  //search error
  const hasErrors = Object.values(fieldErrors).some(Boolean);

  const fields = { body, title };

  if (hasErrors) {
    return badRequest({ fieldErrors, fields });
  }
  const post = await db.post.create({ data: fields });
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
  const actionData = useActionData();

  const { fieldErrors } = actionData ?? {};
  const { title: titleError, body: bodyError } = fieldErrors ?? {};
  return (
    <Form method="POST" disabled={transition.state === "submitting"}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <br />
        {titleError && <small style={{ color: "red" }}> {titleError} </small>}
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea type="text" id="body" name="body" />
        <br />
        {bodyError && <small style={{ color: "red" }}> {bodyError} </small>}
      </div>
      <button type="submit">
        {transition.state === "submitting" ? "Wait for it ..." : "Create post"}
      </button>
    </Form>
  );
}
