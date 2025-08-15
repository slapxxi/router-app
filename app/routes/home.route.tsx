import { useState } from 'react';
import { Form, href, Link } from 'react-router';
import type { Route } from './+types/home.route';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export default function HomeRoute({}: Route.ComponentProps) {
  const [count, setCount] = useState(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-pink-200/10">
      <header className="p-2">
        <nav>
          <ul>
            <li>
              <Link to={href('/posts')} prefetch="intent">
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="mx-auto flex w-full max-w-xl flex-col rounded bg-white p-4 shadow-lg/10">
        <h2 className="mb-4 text-lg font-semibold">Login {count}</h2>

        <div className="flex flex-col py-2">
          <input
            type="text"
            placeholder="Extra"
            name="extra"
            form="my-form"
            formMethod="post"
            className="w-full rounded border bg-white p-2"
          />
        </div>

        <Form id="my-form" className="flex flex-col gap-2" onSubmit={handleSubmit} method="POST">
          <input type="text" name="firstName" className="rounded border bg-white p-2" placeholder="First Name" />
          <input type="text" name="secondName" className="rounded border bg-white p-2" placeholder="Second Name" />

          <div className="flex gap-2">
            <label className="text-sm" htmlFor={'red'}>
              Red
            </label>
            <input id="red" type="checkbox" name="color" value="red" />
            <label className="text-sm" htmlFor={'blue'}>
              Blue
            </label>
            <input id="blue" type="checkbox" name="color" value="blue" />
            <label className="text-sm" htmlFor="green">
              Green
            </label>
            <input id="green" type="checkbox" name="color" value="green" />
          </div>

          <button className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600 active:translate-y-px">Submit</button>
        </Form>
      </div>
    </div>
  );
}

export async function loader({}: Route.LoaderArgs) {}

export async function action({}: Route.ActionArgs) {}
