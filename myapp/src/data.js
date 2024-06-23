export function Login(toast) {
	const options = {
		method: "POST",
		headers: {
			accept: "application/json",
			apikey: "k-8f7aa4ea-a0c7-42ac-a821-a342d21887fe",
			apisecret: "test-secret",
			"entity-authentication-token":
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlJZCI6ImUtYjY2YmNhMjQtZjZjZS00NDg5LWIyZTktZTI0YTkwZTA0ODc3IiwiaWF0IjoxNzE4ODcyODg0fQ.O0DEB_S-dirK4MMa2nm0yqwDhdCtdvTySPGpmCGAqqU",
			"content-type": "application/json",
		},
		body: JSON.stringify({
			entityId: "e-b66bca24-f6ce-4489-b2e9-e24a90e04877",
			externalUserId: "Ranjeet-123",
			walletAddress: "abc@",
			email: "ranjeetraj44666@gmail.com",
		}),
	};

	fetch("https://staging.questprotocol.xyz/api/users/external/login", options)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			toast.success("Login Successful...", {
				position: "top-center",
			});
		})
		.catch((err) => {
			console.error(err);
			toast.error(err, {
				position: "top-center",
			});
		});
}

export function getData(toast, setData) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			apikey: "k-8f7aa4ea-a0c7-42ac-a821-a342d21887fe",
			token:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LTVkYTQ3M2YwLTNhZjItNDkyZC05NjRiLWMxZTkxZDAxYTE2YiIsImlhdCI6MTcxODk3Njk2NywiZXhwIjoxNzE5NTgxNzY3fQ.1AGoypudHU5yQOv9AOXXHXe_I0RdPe9QQITlIxz8zcU",
			userid: "u-5da473f0-3af2-492d-964b-c1e91d01a16b",
		},
	};

	fetch(
		"https://staging.questprotocol.xyz/api/v2/entities/e-b66bca24-f6ce-4489-b2e9-e24a90e04877/campaigns/c-14d4f959-5999-4308-af48-37549b89eec7",
		options,
	)
		.then((response) => response.json())
		.then((response) => {
			// console.log(response);
			setData(response.data);
			toast.success("Get Form Successful..", {
				position: "top-center",
			});
		})
		.catch((err) => {
			console.error(err);
			toast.error(err, {
				position: "top-center",
			});
		});
}

export function createData(toast) {
	const options = {
		method: "POST",
		headers: {
			accept: "application/json",
			apikey: "k-8f7aa4ea-a0c7-42ac-a821-a342d21887fe",
			token:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LTVkYTQ3M2YwLTNhZjItNDkyZC05NjRiLWMxZTkxZDAxYTE2YiIsImlhdCI6MTcxODk3Njk2NywiZXhwIjoxNzE5NTgxNzY3fQ.1AGoypudHU5yQOv9AOXXHXe_I0RdPe9QQITlIxz8zcU",
			userid: "u-5da473f0-3af2-492d-964b-c1e91d01a16b",
			"content-type": "application/json",
		},
		body: JSON.stringify({
			campaignVariationId: "cv-d9d30363-2ce8-4793-a7b3-ab34eccdbd71",
			actions: [
				{
					actionId: "ca-336fef44-9d0f-42dc-8493-15a91ea36013",
					answers: ["jhon"],
				},
			],
		}),
	};

	fetch(
		"https://staging.questprotocol.xyz/api/v2/entities/e-b66bca24-f6ce-4489-b2e9-e24a90e04877/campaigns/c-14d4f959-5999-4308-af48-37549b89eec7/verify",
		options,
	)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			toast.success("Form submit Successful..", {
				position: "top-center",
			});
		})
		.catch((err) => {
			console.error(err);
			toast.error(err, {
				position: "top-center",
			});
		});
}
