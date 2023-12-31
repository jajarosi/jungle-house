import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        isBestSale : true,
		light : 2,
		water : 1,
		cover: monstera,
		price : 12
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
        isBestSale : false,
		isSpecialOffer : true,
		light : 1,
		water : 2,
		cover: lyrata,
		price : 11
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
        isBestSale : false,
		isSpecialOffer : true,
		light : 3,
		water : 1,
		cover: pothos,
		price : 15
	},
	{
		name: 'mint',
		category: 'classique',
		id: '4kk',
        isBestSale : false,
		light : 3,
		water : 1,
		cover: mint,
		price : 14
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
        isBestSale : true,
		light : 2,
		water : 2,
		cover: olivier,
		price : 16
	},
	{
		name: 'calathea',
		category: 'extérieur',
		id: '6uo',
        isBestSale : false,
		isSpecialOffer : true,
		light : 2,
		water : 1,
		cover: calathea,
		price : 15
	},
	{
		name: 'basil',
		category: 'extérieur',
		id: '7ie',
        isBestSale : false,
		isSpecialOffer : true,
		light : 2,
		water : 3,
		cover: basil,
		price : 9
	},
	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
        isBestSale : true,
		light : 2,
		water : 1,
		cover: cactus,
		price : 13
	},
	{
		name: 'succulent',
		category: 'plante grasse',
		id: '9vn',
        isBestSale : false,
		light : 2,
		water : 1,
		cover: succulent,
		price : 12
	}
]
