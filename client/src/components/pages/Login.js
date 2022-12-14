import React, { useState } from 'react';
import Cookies from 'universal-cookie';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch('/user_data', {
			method: 'POST',
			crossDomain: true,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status === 'ok');
				data.map(v => {
					if( email == v.email && password == v.password ){
						console.log('yes') 
						const cookies = new Cookies();
						cookies.set('firstname', v.firstname, { path: '/' });
						cookies.set('lastname', v.lastname, { path: '/' });
						cookies.set('email', v.email, { path: '/' });
												
						window.location.href = './';
					}else{
						console.log('no') 
					}
				})
			});

	};
	return (
		<form onSubmit={handleSubmit}>
			<h3>Sign In</h3>

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

			<div className='mb-3'>
				<div className='custom-control custom-checkbox'>
					<input
						type='checkbox'
						className='custom-control-input'
						id='customCheck1'
					/>
					<label className='custom-control-label' htmlFor='customCheck1'>
						Remember me
					</label>
				</div>
			</div>
			
			<div className='d-grid'>
				<button type='submit' className='btn btn-primary'>
		              Submit
				</button>
			</div>
			<p className='forgot-password text-right'>
				<a href='./reset'>forget password?</a>
				</p>
			<p className='forgot-password text-right'>
				<a href='./sign-up'>sign up</a>
			</p>
		</form>
	);
};

export default Login;