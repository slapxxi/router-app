import { Outlet } from 'react-router';
import type { Route } from './+types/posts.route';

export default function PostsLayoutRoute({}: Route.ComponentProps) {
  return (
    <div className="p-2">
      <h1 className="text-xl font-bold">Posts</h1>
      <Outlet />
    </div>
  );
}

export async function loader({}: Route.LoaderArgs) {
  console.log('posts loader');
}
