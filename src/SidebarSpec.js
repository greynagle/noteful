import React from 'react'
import { Route, NavLink } from 'react-router-dom'

export default function SidebarSpec(props) {
	const folder = props.folders.find(f =>
		f.id === props.other.match.params.folderId
	)
	return (
		<>
			<ul className='FolderList'>
				<li key={folder.id}>
					<NavLink to={`/folder/${folder.id}`}>
						{folder.name}
					</NavLink>
				</li>
			</ul>
			<Route
				render={({history})=>{
					return <button
						onClick={()=> history.push('/')}
					>
						Go Back
					</button>
				}}
			/>
		</>
	)
}