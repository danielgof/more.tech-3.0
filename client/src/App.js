import React, { useState } from 'react'
import Comments from './components/Comments'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
	const { isLoading } = useAuth0()
	const [ pageName, setPageName ] = useState('Comments');

	const UserMenu = () => {
		if (isLoading)
			return (
				<span>
					Loading . . .
				</span>
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
			case "UserInfo" : return <Profile />
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
							<input key={"i" + i}  type="checkbox" className="btn-check" id={name + i} autoComplete="off" />
							<label key={"l" + i} id={name + i} className="btn btn-outline-warning mx-2 my-1" htmlFor={name + i}>{ name }</label>
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
					<input type="button" className="btn btn-dark" value="TestCheckboxes" 	onClick={(e) => setPageName("TestCheckboxes")} />
					<input type="button" className="btn btn-dark" value="UserInfo" 			onClick={(e) => setPageName("UserInfo")} />
					<UserMenu />
				</span>
			</div>
			<hr className="top-menu-hr" />
			<div className="body-frame">
				<BodyFrame />
			</div>
			<br />
			<div> Rate us! 
				<div className="simple-rating">
					<div className="simple-rating_items">
						<input id="simple-rating_5" type="radio" className="simple-rating_item" name="simple-rating" value="5" onClick={() => console.log("5")} />
						<label htmlFor="simple-rating_5">5</label>

						<input id="simple-rating_4" type="radio" className="simple-rating_item" name="simple-rating" value="4" onClick={() => console.log("4")} />
						<label htmlFor="simple-rating_4">4</label>

						<input id="simple-rating_3" type="radio" className="simple-rating_item" name="simple-rating" value="3" onClick={() => console.log("3")} />
						<label htmlFor="simple-rating_3">3</label>

						<input id="simple-rating_2" type="radio" className="simple-rating_item" name="simple-rating" value="2" onClick={() => console.log("2")} />
						<label htmlFor="simple-rating_2">2</label>

						<input id="simple-rating_1" type="radio" className="simple-rating_item" name="simple-rating" value="1" onClick={() => console.log("1")} />
						<label htmlFor="simple-rating_1">1</label>
					</div>
				</div>
			</div>
		</div>
	)

}

export default App