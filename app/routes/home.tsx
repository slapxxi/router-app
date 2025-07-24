import { useId } from 'react';
import { Form } from 'react-router';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const data = loaderData;

  const redId = useId();
  const blueId = useId();
  const greenId = useId();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const fd = new FormData(form);
    const values = Object.fromEntries(fd);
    console.log(values, { data });
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="mx-auto flex max-w-xl flex-col bg-neutral-50 p-4 w-full">
        <h2>Login</h2>

        <Form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input type="text" name="firstName" className="border p-2 rounded bg-white" />
          <input type="text" name="secondName" className="border p-2 rounded bg-white" />

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

export function loader() {
  console.log('home loader');
  return { example: 'example' };
}
