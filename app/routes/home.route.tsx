import type { Route } from './+types/home.route';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export default function HomeRoute({}: Route.ComponentProps) {
  return <div>Home Route</div>;
}

export async function loader({}: Route.LoaderArgs) {}

export async function action({}: Route.ActionArgs) {}
