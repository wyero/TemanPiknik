import axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_PREFIX, REACT_APP_TOKEN } = process.env;

const getApi = async (suffix, prefix = false) => {
	const response = await axios
		.get(
			prefix
				? `${REACT_APP_BASE_URL}/${REACT_APP_PREFIX}${suffix}`
				: REACT_APP_BASE_URL + suffix,
			{
				headers: {
					Authorization: "Bearer " + REACT_APP_TOKEN,
				},
			}
		)
		.catch((err) => {
			console.log(err);
		});
	return await response.data;
};

const postApi = async (suffix, data, prefix = false, form = false) => {
	const response = await axios
		.post(
			prefix
				? REACT_APP_BASE_URL + suffix
				: REACT_APP_PREFIX + REACT_APP_BASE_URL + suffix,
			{
				headers: {
					'Authorization': "Bearer " + REACT_APP_TOKEN,
					"Content-Type": "multipart/form-data",
				},
				data,
			}
		)
		.catch((e) => {
			console.log(e);
		});
	return response.data;
};

export { getApi, postApi };
