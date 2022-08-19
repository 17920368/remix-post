export default function CreatePost() {
  return (
    <form action="POST">
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
