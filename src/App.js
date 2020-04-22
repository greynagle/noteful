import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Sidebar from './Sidebar'
import Main from './Main'
import Store from './Store'

function App() {
  return (
    <div className="App">
		<header>
			<nav>
				<Link to='/'>
					<h1>
						Noteful
					</h1>
				</Link>
			</nav>
		</header>
		<main>
			<Sidebar folders={Store.folders}/>
			<Main notes={Store.notes} />
		</main>
    </div>
  );
}

export default App;
