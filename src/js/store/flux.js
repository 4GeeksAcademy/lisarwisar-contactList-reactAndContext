const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			updateContactID: ""
		},
		actions: {
			loadContacts: async () => {

				const initialURL = 'https://playground.4geeks.com/apis/fake/contact/agenda/lisarwisar';

				await fetch(initialURL, {method: "GET"})
				.then (response => {
					return response.json();
				})
				.then(data => {
					setStore({contacts: data})
				})
				.catch(error => {
					console.log(error);
				})
			},

			createContact: async (newContactInfo) => {

				const initialURL = 'https://playground.4geeks.com/apis/fake/contact/';

				await fetch(initialURL, {method: "POST", 
					body: JSON.stringify(newContactInfo), 
					headers: {'Content-Type': 'application/json'}
				})
				.then (response => {
					return response.json();
				})
				.then(data => {
					console.log(data)
				})
				.catch(error => {
					console.log(error);
				})

				loadContacts();
			},

			deleteContact: async (contactID) => {
				const deleteURL = `https://playground.4geeks.com/apis/fake/contact/${contactID}`;

				await fetch(deleteURL, {method: "DELETE"})
				.then (response => {
					return response.json();
				})
				.then(data => {
					console.log(data)
				})
				.catch(error => {
					console.log(error);
				})

				loadContacts();
			},

			setUpdateId: (newID) => {
				setStore({updateContactID: newID})
			},

			updateContact: async (contactID, updatedContactInfo) => {

				const updateURL = `https://playground.4geeks.com/apis/fake/contact/${contactID}`;

				await fetch(updateURL, {
					method: "PUT", 
					body: JSON.stringify(updatedContactInfo), 
					headers: {'Content-Type': 'application/json'}
				})
				.then (response => {
					return response.json();
				})
				.then(data => {
					console.log(data)
				})
				.catch(error => {
					console.log(error);
				})

				loadContacts();
			}
		}
	};
};

export default getState;
