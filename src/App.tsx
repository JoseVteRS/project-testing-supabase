import { useState } from 'react';
import CreateNameForm from './components/names/create-name-form';
import MainLayout from './layouts/main-layout';

function App() {
	const [count, setCount] = useState(0);

	return (
		<MainLayout>
			<CreateNameForm />
		</MainLayout>
	);
}

export default App;
