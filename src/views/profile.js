import { React, useState, useEffect, useRef } from 'react';
import '../styles/Profile.css'
import API from '../utils/API';
import therock from '../images/therock.jpg'
import axios from 'axios';
import { Image } from "cloudinary-react";

const URL_PREFIX = 'http://localhost:3001/' || 'http://lifter-backend-build.herokuapp.com/'

const Profile = () => {

	const [imageSelected, setImageSelected] = useState("");

	// constructor() {
	// 	super();

	// 	this.publicId = {
	// 	  jsonReturnedValue: null
	// 	}
	//   }

	// const [publicId, setPublicId] = useState("");

	const [profile, setProfile] = useState({
		firstName: "",
		lastName: "",
		userName: "",
		phoneNumber: "",
		profileImage: "",
		country: "",
		city: "",
		status: ""
	})

	const oneTimeChange = useRef(true);

	useEffect(() => {
		if (oneTimeChange.current) {
			axios.get(URL_PREFIX + `api/coaches/${localStorage.getItem('id')}`).then((response) => {
				//set responses as profile texts 
				const firstName = response.data.firstName
				const lastName = response.data.lastName
				const userName = response.data.userName
				const phoneNumber = response.data.phoneNumber
				const profileImage = response.data.profileImage
				const country = response.data.country
				const city = response.data.city
				const status = response.data.status
				const profileT = { firstName: firstName, lastName: lastName, userName: userName, phoneNumber: phoneNumber, profileImage: profileImage, country: country, city: city, status: status }
				setProfile(profileT)
				console.log(profile)
			})
			oneTimeChange.current = false;
		}
	}, []);

	// function getProfileStuff() {
	// 	axios.get(URL_PREFIX + `api/coaches/${localStorage.getItem('id')}`).then((response) => {
	// 		console.log(response)
	// 	})
	// }

	// getProfileStuff();


	function handleFormSubmit(e) {
		e.preventDefault()
		console.log('submitting form')
		// console.log(profile)
		// const formData = new FormData();
		// formData.append("file", imageSelected);
		// formData.append("upload_preset", "pyqqyzxb");
		// axios.post("https://api.cloudinary.com/v1_1/ddkr1ny4l/image/upload", formData).then((response) => {
		// 	console.log(response);
		// })
		API.putCoaches(localStorage.getItem("id"), profile.firstName, profile.lastName, profile.userName, profile.phoneNumber, profile.publicId, profile.country, profile.city, profile.status)
	}


	function handleFormChange(e) {
		setProfile({ ...profile, [e.target.name]: e.target.value })
	}

	const uploadImage = () => {
		// console.log(files[0]);
		const formData = new FormData();
		formData.append("file", imageSelected);
		formData.append("upload_preset", "pyqqyzxb");
		axios.post("https://api.cloudinary.com/v1_1/ddkr1ny4l/image/upload", formData).then((response) => {
			console.log(response);
			// setPublicId(response.data.public_id)
			// setPublicId(this.response.data.public_id);
			console.log(response.data.public_id);
		})
	}


	return (
		<div className='divBody'>
			<div className='row'>
				<div className='col-md-3 border-right'>
					<div className='d-flex flex-column align-items-center text-center p-3 py-5'>
						<input
							type="file"
							onChange={(event) => { setImageSelected(event.target.files[0]); }}
							alt='Profile'
						// className='rounded-circle mt-5'
						// width='150px'
						/>
						<button onClick={uploadImage}>Upload Profile Picture</button>
						<span className='font-weight-bold'></span>
						<span className='text-black-50'></span>
						<Image className='rounded-circle mt-5' width='150px' cloudName="ddkr1ny4l" publicId="etcinvfhabblkw1m3wvb" />
					</div>
				</div>

				{/* Settings */}
				<div className='col-md-5 border-right'>
					<div className='p-3 py-5'>
						<div className='d-flex justify-content-between align-items-center mb-3'>
							<h4 className='text-right'>liftr Profile</h4>
						</div>
						<div className='row mt-2'>
							<div className='col-md-6'>
								<label className='labels'>First Name</label>
								<input
									name='firstName'
									type='text'
									className='form-control'
									placeholder='First Name'
									onChange={handleFormChange}
								/>
							</div>
							<div className='col-md-6'>
								<label className='labels'>Last Name</label>
								<input
									name='lastName'
									type='text'
									className='form-control'
									placeholder='Surname'
									onChange={handleFormChange}
								/>
							</div>
							<div className='row mt-3'>
								<div className='col-md-12'>
									<label className='labels'>Username</label>
									<input
										name="userName"
										type='text'
										className='form-control'
										placeholder='Username'
										onChange={handleFormChange}
									/>
								</div>
								<div className='col-md-12'>
									<label className='labels'>Phone Number</label>
									<input
										name="phoneNumber"
										type='text'
										className='form-control'
										placeholder='Enter Phone Number'
										onChange={handleFormChange}
									/>
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col-md-12'>
									<label className='labels'>Country</label>
									<input
										name="country"
										type='text'
										className='form-control'
										placeholder='Country'
										onChange={handleFormChange}
									/>
								</div>
								<div className='col-md-12'>
									<label className='labels'>City</label>
									<input
										name="city"
										type='text'
										className='form-control'
										placeholder='State'
										onChange={handleFormChange}
									/>
								</div>
								<div className='mt-5 text-center'>
									<button
										className='btn btn-primary profile-button'
										type='button'
										onClick={handleFormSubmit}
									>
										Save Profile
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='p-3 py-5'>
						<div className='d-flex justify-content-between align-items-center experience'>
							<span>Status</span>
							<span className='border px-3 p-1 add-experience'>
								<i className='fa fa-plus'></i>&nbsp;Status
							</span>
						</div>
						<br />
						<div className='col-md-12'>
							<label className='labels'>Status</label>
							<input
								name="status"
								type='text'
								className='form-control'
								placeholder='Status'
								onChange={handleFormChange}
							/>
						</div>
						<br />
					</div>
				</div>
				{/* </form> */}
			</div>
		</div>
	)
}

export default Profile


