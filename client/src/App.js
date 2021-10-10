import React, { useState } from 'react'
import Comments from './components/Comments'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Account from './components/Account'
import TestDH from './components/TestDH'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
	const { isLoading } = useAuth0()
	const [ pageName, setPageName ] = useState('Comments');

	const UserMenu = () => {
		if (isLoading)
			return (
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			)
		else
			return (
				<span>
					<LoginButton />
					<LogoutButton />
				</span>
			)
    }


	const BodyFrame = () => {
		switch(pageName) {
			case "Comments" : return <Comments />
			case "TestCheckboxes" : return <TestCheckboxes />
			case "Account" : return <Account />
			default : return <Comments />
		}
	}

	const TestCheckboxes = () => {
		const arr = ["doc", "docx", "csv", "pdf", "png", "jpg", "bmp", "json", "xml", "xls", "xlsx", "txt", "dat", "ini", "psd", "mp3", "mp4", "avi", "flv", "mov", "obj", "mtl", "fbx", "stl"]
		
		return (
			<div>
				{
					arr.map((name, i) => (
						<span key={"s" + i}>
							<input key={"i" + i} type="checkbox" className="btn-check" id={name + i} autoComplete="off" />
							<label key={"l" + i} id={name + i} className="btn btn-outline-light mx-2 my-1" htmlFor={name + i}>{ name }</label>
						</span>
					))
				}
			</div>
		)

	}

	return (
		<div className="bg-main">
			<div className="top-menu">
				<span className="top-menu-page-name">
					{pageName}
				</span>
				<span className="top-menu-buttons">
					<input type="button" className="btn btn-dark" value="Comments" 			onClick={(e) => setPageName("Comments")} />
					<input type="button" className="btn btn-dark" value="DataTypes" 		onClick={(e) => setPageName("TestCheckboxes")} />
					<input type="button" className="btn btn-dark" value="Account" 			onClick={(e) => setPageName("Account")} />
					<UserMenu />
				</span>
			</div>
			<hr className="top-menu-hr" />
			<div className="body-frame">
				<BodyFrame />
			</div>
		</div>
	)

}

export default App