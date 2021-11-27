
export default {
	state: {
		products: [],
	},
	mutations: {
		CHANGE_PRODUCTS: (state, value) =>{
			state.products = value;
		},
		ADD_PRODUCT: (state, product) =>{
			let new_product = {};
			for (let key in product) {
				new_product[key] = product[key];
			}

			state.products.unshift(new_product);
		},
		DELETE_PRODUCT: (state, product_id) =>{
			state.products = state.products.filter(item => item.id != product_id);
		},
		SORT_PRODUCTS: (state, sorting_option) =>{
			if (sorting_option == "По умолчанию") {
				state.products.sort((a, b) => {
					if (+a.id > +b.id) return 1;
					if (+a.id == +b.id) return 0;
					if (+a.id < +b.id) return -1;
				}).reverse();
			} else if (sorting_option == "По цене min (от меньшего к большему)") {
				state.products.sort((a, b) => { 
					if (parseInt(a.cost.replace(/[^\d]/g, '')) > parseInt(b.cost.replace(/[^\d]/g, ''))) return 1;
					if (parseInt(a.cost.replace(/[^\d]/g, '')) == parseInt(b.cost.replace(/[^\d]/g, ''))) return 0;
					if (parseInt(a.cost.replace(/[^\d]/g, '')) < parseInt(b.cost.replace(/[^\d]/g, ''))) return -1;
				});
			} else if (sorting_option == "По цене max (от большего к меньшему)") {
				state.products.sort((a, b) => { 
					if (parseInt(a.cost.replace(/[^\d]/g, '')) < parseInt(b.cost.replace(/[^\d]/g, ''))) return 1;
					if (parseInt(a.cost.replace(/[^\d]/g, '')) == parseInt(b.cost.replace(/[^\d]/g, ''))) return 0;
					if (parseInt(a.cost.replace(/[^\d]/g, '')) > parseInt(b.cost.replace(/[^\d]/g, ''))) return -1;
				});
			} else if (sorting_option == "По наименованию") {
				state.products.sort((a, b) => {
					if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
					if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
				});
			}
		}
	},
	getters:{
		GET_PRODUCTS: (state) =>{
			return state.products
		},
	},
	actions: {
		SET_PRODUCTS: ({ commit }) =>{
			let products_list = [
			{
				id: '10',
				name: 'Наименование товара',
				description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
				cost: '9 000 руб.',
				image_alt: 'product image',
				image_src: 'http://kutuzoff.space/images/Rectangle%2031.png',
			},
			{
				id: '9',
				name: 'Наименование товара',
				description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
				cost: '10 000 руб.',
				image_alt: 'product image',
				image_src: 'http://kutuzoff.space/images/Rectangle%2031.png',
			},
			{
				id: '8',
				name: 'Наименование товара',
				description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
				cost: '10 050 руб.',
				image_alt: 'product image',
				image_src: 'http://kutuzoff.space/images/Rectangle%2031.png',
			},
			{
				id: '7',
				name: 'Наименование товара',
				description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
				cost: '10 000 руб.',
				image_alt: 'product image',
				image_src: 'http://kutuzoff.space/images/Rectangle%2031.png',
			},
			{
				id: '6',
				name: 'Наименование товара',
				description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
				cost: '10 000 руб.',
				image_alt: 'product image',
				image_src: 'http://kutuzoff.space/images/Rectangle%2031.png',
			},
			{
				id: '5',
				name: 'Наименование товара',
				description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
				cost: '8 000 руб.',
				image_alt: 'product image',
				image_src: 'http://kutuzoff.space/images/Rectangle%2031.png',
			},
			{
				id: '4',
				name: 'Наименование товара',
				description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
				cost: '10 000 руб.',
				image_alt: 'product image',
				image_src: 'http://kutuzoff.space/images/Rectangle%2031.png',
			},
			{
				id: '3',
				name: 'Наименование товара',
				description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
				cost: '15 000 руб.',
				image_alt: 'product image',
				image_src: 'http://kutuzoff.space/images/Rectangle%2031.png',
			},
			{
				id: '2',
				name: 'Наименование товара',
				description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
				cost: '7 000 руб.',
				image_alt: 'product image',
				image_src: 'http://kutuzoff.space/images/Rectangle%2031.png',
			},
			{
				id: '1',
				name: 'Наименование товара',
				description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
				cost: '30 000 руб.',
				image_alt: 'product image',
				image_src: 'http://kutuzoff.space/images/Rectangle%2031.png',
			},
		];
			commit('CHANGE_PRODUCTS', products_list)
		},
		SET_PRODUCT: ({ commit }, product) =>{
			commit('ADD_PRODUCT', product)
		},
		SET_DELETE_PRODUCT: ({ commit }, product_id) => {
			commit('DELETE_PRODUCT', product_id)
		},
		SET_SORTING_OPTION: ({ commit }, sorting_option) =>{
			commit('SORT_PRODUCTS', sorting_option)
		},
	},
	modules: {
	}
}
