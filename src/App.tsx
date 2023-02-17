import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './components/AppRoutes';
import { NavBar } from './components/NavBar';
import { Suspense } from 'react';
import { Loading } from './components/Loading';

function App() {
	return (
		<div className='container'>
			<BrowserRouter>
				<NavBar />
				<Suspense fallback={<Loading />}>
					<AppRoutes />
				</Suspense>
			</BrowserRouter>
		</div>
	);
}

export default App;
