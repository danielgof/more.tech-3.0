import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Account = () => {
	const { user, isAuthenticated } = useAuth0()
	//const [userFeatures, setUserFeatures] = useState([]);

	const UserFeatures = () => {
		let features = []
		for (let i = 0; i < 10; i++)
			features.push("feature" + i);

		return(
			<div>
				{
					features.map((name, i) => (
						<div key={i} className="data-container-mini row">
							<div className="col-auto">
								<input key={"i" + i} type="checkbox" className="btn-check" id={name + i} autoComplete="off" />
								<label key={"l" + i} id={name + i} className="btn btn-sm btn-outline-light data-container-mini-button" htmlFor={name + i}> </label>
							</div>
							<div className="data-container-mini-text col">{name}</div>
						</div>
					))
				}
			</div>
		)
	} 

	console.log(user)

	return (
		isAuthenticated && (
			<div className="account">
				<div>
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
				<div>
					<div className="account-buttons d-flex">
						<input type="button" className="btn btn-dark mx-2 my-1" value="Мои фичи" />
						<input type="button" className="btn btn-dark mx-2 my-1" value="Мои витрины" />
						<input type="button" className="btn btn-dark mx-2 my-1" value="Мои датасеты" />
						<form className="d-flex ms-auto">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success" type="button">Search</button>
      					</form>
					</div>
					<UserFeatures />
					<div>
						<input type="button" className="btn btn-outline-light mx-2 my-2" value="предоставить доступ" />
						<input type="button" className="btn btn-outline-light mx-2 my-2" value="ограничить доступ" />
						<input type="button" className="btn btn-outline-light mx-2 my-2" value="аудит доступа" />
						<input type="button" className="btn btn-outline-light mx-2 my-2" value="создать новую фичу" />
						<input type="button" className="btn btn-outline-light mx-2 my-2" value="подготовка задания" />
					
					</div>
				</div>
			</div>
		)
	)
}

export default Account