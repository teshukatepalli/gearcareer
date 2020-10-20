import { API } from '@/api';

const state = {
	retailers: {},
	segments: {},
};
const mutations = {
	updateRetailers(state,data) {
		data.sort((a, b) => a.name.toLowerCase() !== b.name.toLowerCase() ? a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1 : 0);
		state.retailers = data;
	},
	updateSegments(state,data) {
		state.segments = data;
	}
};
const actions = {
	async retailers(context) {
		let  { data }  = await API.Retailers.getRetailers()
		context.commit('updateRetailers', data.results);
	},
	async getSegments(context) {
		let { data } = await API.Retailers.getRetailerSegment()
		context.commit('updateSegments', data.results);
	},
	async createSegments(context,content) {
		console.log(content)
		await API.Retailers.createRetailerSegment(content);
	}
};

 
export default {
	namespaced: true,
	state,
	mutations,
	actions
}
