import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import SidebarTop from './SidebarTop'
import SidebarSpec from './SidebarSpec'


export default function SideBar(props) {
	return(
		<>
			<Route 
				exact
				path='/' 
				render={(routeProps) => 
					<SidebarTop
						folders={props.folders}	
					/>
				}
			/>
			<Route
				path='/folder/:folderId'
				render={(routeProps) => 
					<SidebarSpec
						folders={props.folders}
						other={routeProps}
					/>
				}
			/>
		</>
	)

}

