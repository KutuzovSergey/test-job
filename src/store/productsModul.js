
export default {
	state: {
		products: [],
	},
	mutations: {
		CHANGE_PRODUCTS: (state, value) =>{
			state.products = value;
		},
	},
	getters:{
		GET_PRODUCTS: (state) =>{
			return state.products
		},
	},
	actions: {
		GET_PRODUCTS: ({ commit }) =>{
			let products_list = [
			{
				id: '1',
				name: 'Наименование товара',
				description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
				cost: '10 000 руб.',
				image_alt: 'product image',
				image_src: 'http://kutuzoff.space/images/Rectangle%2031.png',
			},
			{
				id: '2',
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
				cost: '10 000 руб.',
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
				id: '5',
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
				id: '7',
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
				cost: '10 000 руб.',
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
				id: '10',
				name: 'Наименование товара',
				description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
				cost: '10 000 руб.',
				image_alt: 'product image',
				image_src: 'http://kutuzoff.space/images/Rectangle%2031.png',
			},
		];
			commit('CHANGE_PRODUCTS', products_list)
		},
	},
	modules: {
	}
}
