import React from 'react';
import { NavLink } from 'react-router-dom'

export default function SidebarTop(props) {
	return(
		<>
			<ul className='FolderList'>
				{props.folders.map(val =>
					<li key={val.id}>
						<NavLink to={`/folder/${val.id}`}>
							{val.name}
						</NavLink>
					</li>
				)}
			</ul>
		</>
	)

}