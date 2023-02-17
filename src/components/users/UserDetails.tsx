import { ErrorBoundary } from 'react-error-boundary';
import { AccountDetails } from './AccountDetails';
import { MovieDetails } from './MovieDetails';
import { ErrorFallback } from '../ErrorFallback';
import { Suspense } from 'react';
import { Loading } from '../Loading';

interface Props {
	userId: number;
	movieId: number;
}
export function UserDetails({ userId, movieId }: Props) {
	return (
		<div>
			<h4 className='text-center mt-5'>User details</h4>
			<Suspense fallback={<Loading />}>
				<Suspense fallback={<Loading />}>
					<ErrorBoundary FallbackComponent={ErrorFallback}>
						<AccountDetails userId={userId} />
					</ErrorBoundary>
				</Suspense>
				<h4 className='text-center mt-5'>Favorite movie</h4>
				<Suspense fallback={<Loading />}>
					<ErrorBoundary FallbackComponent={ErrorFallback}>
						<MovieDetails movieId={movieId} />
					</ErrorBoundary>
				</Suspense>
			</Suspense>
		</div>
	);
}
