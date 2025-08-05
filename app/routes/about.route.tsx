import type { Route } from './+types/about.route';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function AboutRoute({}: Route.ComponentProps) {
  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-4">
      <h2 className="flex text-xl font-semibold text-neutral-900">About</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore impedit quisquam ratione
        ipsa nemo id, sapiente in accusamus incidunt facilis obcaecati animi minus, neque omnis
        magnam consectetur quidem et illo?
      </p>
    </div>
  );
}

export async function loader({}: Route.LoaderArgs) {}

export async function action({}: Route.ActionArgs) {}
