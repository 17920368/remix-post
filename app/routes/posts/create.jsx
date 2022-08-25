import { redirect } from "@remix-run/node";

// get formData
export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");
  console.log({ title, body });
  return redirect("/posts");
};
export default function CreatePost() {
  return (
    <form method="POST">
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea type="text" id="body" name="body" />
      </div>
      <button type="submit">Add new post</button>
    </form>
  );
}
