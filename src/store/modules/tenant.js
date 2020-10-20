import { API } from '@/api';

const state = {
	profileData: '',
	campaignData: '',
	campaignLength: null,
	tenantRetailers: '',
	updateOfferStatus: '',
	allTenants: '',
	activeTenant: '',
	getOffer: '',
	getProfile: '',
};
const mutations = {
	getProfile(state, data) {
		state.getProfile  = data
	},
	updateTenant(state, data) {
		state.profileData = data;
	},
	getCampaigns(state, data) {
		let OffersCount = []
		for(let i = 0; i < data.length; i++) {
			let CampaignCount = 0
			for(let j = 0; j < data[i].offer.length; j++) {
				let AudienceCount = 0
				if(data[i].offer[j].status != 'scheduled' && data[i].offer[j].status != 'GA') {
					let prmAudience = 0
					if(data[i].offer[j].audience.prm.length > 0) {
						let prm = data[i].offer[j].audience.prm
						for(let i = 0; i<prm.length;i++) {
							for(let j = 0; j<prm[i].data.length; j++) {
								prmAudience += prm[i].data[j].total
							}
						}
					}
					AudienceCount += prmAudience
					let engAudience = 0
					if(data[i].offer[j].audience.eng.length > 0) {
						let eng = data[i].offer[j].audience.eng
						for(let i = 0; i<eng.length;i++) {
							for(let j = 0; j<eng[i].data.length; j++) {
								engAudience += eng[i].data[j].total
							}
						}
					}
					AudienceCount += engAudience
				} 
				else {
					data[i].offer[j].audience_count = '0'
				}
				data[i].offer[j].audience_count = AudienceCount
				CampaignCount += AudienceCount
			}
			data[i].totalCount = CampaignCount
		}
		data.sort((a, b) => a.name.toLowerCase() !== b.name.toLowerCase() ? a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1 : 0);
		state.campaignData = data;
	},
	getCampaignLength(state, data) {
		state.campaignLength = data;
	},
	getTenantRetailers(state,data) {
		data.conf.retailers.sort((a, b) => a.name.toLowerCase() !== b.name.toLowerCase() ? a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1 : 0);
		state.tenantRetailers = data;
	},
	updateOffer(state,data) {
		state.updateOfferStatus = data;
	},
	getAllTenants(state,data) {
		state.allTenants = data.results;
	},
	updateActiveTenant(state, data) {
		state.activeTenant = data;
	},
	getOfferData(state,data) {
		state.getOffer = data;
	},
};
const actions = {
	async profileData(context) {
		let { data } = await API.Profile.getProfile()
		let activeTenant = data.active_tenant[0].tenant_id
		var tenant = data.tenant.find(tenant => tenant.id === data.active_tenant[0].tenant_id)
		context.commit('getProfile', data);
		context.commit('updateActiveTenant', activeTenant)
		context.commit('updateTenant', tenant);
	},
	async changeActiveTenant(context, id) {
		let payload = {
			"tenant" : id
		}
		let { data } = await API.Tenant.activeTenants(payload)
		context.commit('updateActiveTenant', data.tenant);
	},
	async campaignData(context, id) {
		let { data } = await API.Campaign.getCampaign(id);
		context.commit('getCampaigns',data.results);
		let length = 0;
		for (let i = 0; i < data.results.length; i++) {
			if(data.results[i].state === true) {
				length++;
			}
		}
		context.commit('getCampaignLength',length);
	},
	async tenantRetailers(context, id) {
		let { data } = await API.Retailers.tenantRetailers(id);
		if (data.count) {
			var tenantRetailers = {
				id: data.results[0].id,
				conf: {
					retailers: data.results[0].conf.retailers
				},
				tenant: data.results[0].tenant
			}
			context.commit('getTenantRetailers', tenantRetailers);
		}
		else {
			var tenantRetailers = {
				id: null,
				conf: {
					retailers: []
				},
				tenant: null
			}
			context.commit('getTenantRetailers', tenantRetailers);
		}
	},
	async createTenantRetailers(context, content) {
		let { data } = await API.Retailers.createTenantRetailers(content);
		context.commit('getTenantRetailers',data);
	},
	async updateTenantRetailers(context, content) {
		let { data } = await API.Retailers.updateTenantRetailers(content);
		context.commit('getTenantRetailers', data);
	},
	async patchTenantRetailers(context, content) {
		let { data } = await API.Retailers.partialTenantRetailers(content);
		context.commit('getTenantRetailers', data);
	},
	async getOffer(context, content) {
		let data = await API.Offer.getOffer(content);
		context.commit('getOfferData', data.data);
	},
	async updateOffer(context, content) {
		let { data } = await API.Offer.updateOffer(content);
		context.commit('updateOffer', data);
	},
	async updateDpnOffer(context, content) {
		let { data } = await API.Offer.dpnOffer(content);
		context.commit('updateOffer', data);
	},
	async getAllTenants(context) {
		let { data } = await API.Tenant.getTenants();
		context.commit('getAllTenants', data);
	},
	async updateTenants(context, content) {
		await API.Tenant.updateTenants(content)
	}
};
const getters = {
	sortCampaigns: state => state.campaignData
};


export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
