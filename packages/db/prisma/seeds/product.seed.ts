import { PrismaClient } from '../../generated/client'

export const seedProduct = async (db: PrismaClient) => {
	await db.product.createMany({
		data: [
			{
				title: ['สินค้าทดสอบ 1', 'Test Product 1'],
				description:
					'สักวา หวานอื่น มีหมื่นแสนไม่เหมือนแม้น พจมาน ที่หวานหอมกลิ่นประเทียบ เปรียบดวง พวงพยอมอาจจะน้อม จิตโน้ม ด้วยโลมลม',
				price: 5,
				image: 'https://via.placeholder.com/256x256',
				createdAt: new Date(new Date().getTime() + 1000),
			},
			{
				title: ['สินค้าทดสอบ 2', 'Test Product 2'],
				description:
					'สักวา หวานอื่น มีหมื่นแสนไม่เหมือนแม้น พจมาน ที่หวานหอมกลิ่นประเทียบ เปรียบดวง พวงพยอมอาจจะน้อม จิตโน้ม ด้วยโลมลม',
				price: 10,
				image: 'https://via.placeholder.com/256x256',
				createdAt: new Date(new Date().getTime() + 2000),
			},
			{
				title: ['สินค้าทดสอบ 3', 'Test Product 3'],
				description:
					'สักวา หวานอื่น มีหมื่นแสนไม่เหมือนแม้น พจมาน ที่หวานหอมกลิ่นประเทียบ เปรียบดวง พวงพยอมอาจจะน้อม จิตโน้ม ด้วยโลมลม',
				price: 15,
				image: 'https://via.placeholder.com/256x256',
				createdAt: new Date(new Date().getTime() + 3000),
			},
			{
				title: ['สินค้าทดสอบ 4', 'Test Product 4'],
				description:
					'สักวา หวานอื่น มีหมื่นแสนไม่เหมือนแม้น พจมาน ที่หวานหอมกลิ่นประเทียบ เปรียบดวง พวงพยอมอาจจะน้อม จิตโน้ม ด้วยโลมลม',
				price: 20,
				image: 'https://via.placeholder.com/256x256',
				createdAt: new Date(new Date().getTime() + 4000),
			},
			{
				title: ['สินค้าทดสอบ 5', 'Test Product 5'],
				description:
					'สักวา หวานอื่น มีหมื่นแสนไม่เหมือนแม้น พจมาน ที่หวานหอมกลิ่นประเทียบ เปรียบดวง พวงพยอมอาจจะน้อม จิตโน้ม ด้วยโลมลม',
				price: 25,
				image: 'https://via.placeholder.com/256x256',
				createdAt: new Date(new Date().getTime() + 5000),
			},
		],
	})
}
