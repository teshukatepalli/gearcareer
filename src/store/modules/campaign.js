import { API } from '@/api';

const state = {
	deleteCampaignResponse: ''
};
const mutations = {
	deleteCampaign(state, data) {
		state.deleteCampaignResponse = data;
	}
};
const actions = {
	async deleteCampaign(context, id) {
		let data = await API.Campaign.deleteCampaign(id)
		context.commit('deleteCampaign', data.data.results);
	}
};


export default {
	namespaced: true,
	state,
	mutations,
	actions
}
