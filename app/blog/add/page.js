import { createPost } from "./action";

export default function Add() {

  return (
    <form action={createPost}>
      <p><input required name="title" placeholder="Title"></input></p>
      <p><textarea required name="body" placeholder="Body"></textarea></p>
      <p><button>Add</button></p>
    </form>
  )
}