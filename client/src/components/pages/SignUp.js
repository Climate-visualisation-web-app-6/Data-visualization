import React, { useState } from 'react';

const SignUp = () => {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if(firstname.length != 0 && lastname.length != 0 && email.length != 0 && password.length != 0){
			fetch('/register', {
				method: 'POST',
				crossDomain: true,
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					firstname,
					lastname,
					email,
					password,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data, 'userRegister');
					window.location.href = './login';
				});
		}else{
			console.log('fill form')
		}

	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Sign Up</h3>

			<div className='mb-3'>
				<label>First name</label>
				<input
					type='text'
					className='form-control'
					placeholder='First name'
					onChange={(e) => setFirstname(e.target.value)}
				/>
			</div>

			<div className='mb-3'>
				<label>Last name</label>
				<input
					type='text'
					className='form-control'
					placeholder='Last name'
					onChange={(e) => setLastname(e.target.value)}
				/>
			</div>

			<div className='mb-3'>
				<label>Email address</label>
				<input
					type='email'
					className='form-control'
					placeholder='Enter email'
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>

			<div className='mb-3'>
				<label>Password</label>
				<input
					type='password'
					className='form-control'
					placeholder='Enter password'
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<div className='d-grid'>
				<button type='submit' className='btn btn-primary'>
					Sign Up
				</button>
			</div>
			<p className='forgot-password text-right'>
				Already registered <a href='/login'>sign in?</a>
			</p>
		</form>
	);
};

export default SignUp;