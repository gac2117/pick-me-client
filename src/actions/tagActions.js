import { FETCH_TAGS, NEW_TAG, DELETE_TAG } from './types';

export const fetchTags = () => dispatch => {
	fetch('http://localhost:3000/api/tags', {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
	})
	.then(res => res.json())
	.then(data => {
		if (data.error) {
			console.log(data.error)
		} else {
			dispatch({
			type: FETCH_TAGS,
			payload: data
		})}
	})
	.catch(console.log)
}

export const newTag = (tagData) => dispatch => {
	fetch('http://localhost:3000/api/tags', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(tagData)
		})
		.then(res => res.json())
		.then(data => {
	        if (data.error) {
	          console.log(data.error)
	        } else {
	          dispatch({
				type: NEW_TAG,
				payload: data
			})}
	    })
	    .catch(console.log)
}

export const deleteTag = (tagId) => dispatch => {
	fetch(`http://localhost:3000/api/tags/${tagId}`, {
		method: "DELETE",
		headers: {
			'content-type': 'application/json'
		}
	})
	.then(res => res.json())
	.then(data => {
		if (data.error) {
			console.log(data.error)
		} else {
			dispatch({
				type: DELETE_TAG,
				id: tagId
			})
		}
	})
	.catch(console.log)
}