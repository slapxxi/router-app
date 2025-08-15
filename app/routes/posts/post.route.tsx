import type { Route } from './+types/post.route';

export default function PostRoute({ matches }: Route.ComponentProps) {
  console.log(matches);
  return <div>Post</div>;
}

export async function loader({ request }: Route.LoaderArgs) {
  console.log(request);
}
