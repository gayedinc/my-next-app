"use server"

import { redirect } from 'next/navigation'

export async function createPost(formData) {
  const formObj = Object.fromEntries(formData);
  console.log(formObj);

  redirect('/blog/add/thank-you');
}