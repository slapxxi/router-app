import { useId } from 'react';
import { Form } from 'react-router';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home({}: Route.ComponentProps) {
  const redId = useId();
  const blueId = useId();
  const greenId = useId();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    console.log(...fd);
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="mx-auto flex max-w-xl flex-col bg-neutral-50 p-4 w-full">
        <h2 className="mb-4 text-lg font-semibold">Login</h2>

        <Form className="flex flex-col gap-2" onSubmit={handleSubmit} method="POST">
          <input
            type="text"
            name="firstName"
            className="border p-2 rounded bg-white"
            placeholder="First Name"
          />
          <input
            type="text"
            name="secondName"
            className="border p-2 rounded bg-white"
            placeholder="Second Name"
          />

          <div className="flex gap-2">
            <label className="text-sm" htmlFor={redId}>
              Red
            </label>
            <input id={redId} type="checkbox" name="color" value="red" />
            <label className="text-sm" htmlFor={blueId}>
              Blue
            </label>
            <input id={blueId} type="checkbox" name="color" value="blue" />
            <label className="text-sm" htmlFor={greenId}>
              Green
            </label>
            <input id={greenId} type="checkbox" name="color" value="green" />
          </div>

          <button className="bg-blue-500 rounded text-white p-2">Submit</button>
        </Form>
      </div>
    </div>
  );
}

export async function loader({}: Route.LoaderArgs) {}

export async function action({}: Route.ActionArgs) {}
