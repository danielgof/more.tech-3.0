import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
	const { user, isAuthenticated } = useAuth0()

	console.log(user)

	return (
		isAuthenticated && (
			<div className="profile">
				<div>
					<img src={user.picture} alt={user.name} className="user-img"/>
					<p><b> {user.name} </b></p>
				</div>
				<div>
					<p> {user.email} </p>

					{
						//JSON.stringify(user, null, 2)
					}
				</div>
			</div>
		)
	)
}

export default Profile
