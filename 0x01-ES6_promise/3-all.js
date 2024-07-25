/* eslint-disable*/
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
	return Promise.all([uploadPhoto(), createUser()])
	.then((result) => { 
		console.log(
        `${result[0].body} ${result[1].firstName} ${result[1].lastName}`,
		);
	})

    	.catch((error) => {
		console.log('Signup system offline');
	});
}
