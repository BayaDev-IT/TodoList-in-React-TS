import React, { FC } from 'react'

// let pizza: string = 'Salami'
// pizza = 20

// let prize: number = 20
// let atStock: boolean = true

// let pizzas: string[] = ['Salami', 'Cheese']
// let numbers: number[] = [1,2,3]

// К обьекту нельзя просто просписывать Object
// const order: Object = {
//     title: 'Margarita',
//     count: 10,
// }

//Это работает, но в этом случае нельзя будет переиспользовать наш тип
// const order: { title: string, count: number } = {
// 	title: 'Margarita',
// 	count: 10,
// }

//Нужно использовать type or interface
//Хорошая практика писать название типов и интерфейсов с большой буквы

// type Order = {
//     title: string
//     count: number
// }

// const order: Order = {
// 	title: 'Margarita',
// 	count: 10,
// }

//Если убрать ключ их обьекта будет ошибка(ключ потерян)
// type Order = {
//     title: string
//     count: number
// }

// const order: Order = {
// 	title: 'Margarita',
// }

// Если в type прописать в конце ключа ? - свойство будет необязатаельным!
// type Order = {
//     title: string
//     count?: number
// }

// const order: Order = {
// 	title: 'Margarita',
// }

// type Order = {
//     title: string
//     count?: number
// }

// const order: Order[] = [
//     {title: 'margarita'},
//     {title:'Salami', count: 10}
// ]

//Переменные или ключи могут хранить разные типы

// let number: null | number = null
// number = 20

//Типы для функции
// const printTitle = (title: string) => {
// 	console.log(title)
// }
// printTitle('Salami')

//Желательно прописывать отдельеый тип для функции которое принимает что либо
//Если функция ничего не возращает тогда - void

// type PrintTitleI = (title: string) => void

// const printTitle: PrintTitleI = (title) => {
// 	console.log(title)
// }
// printTitle('Salami')

//Если возвращает - пишем то что она возвращает
//Тип any не указывать, иначе теряется смысл TS
// type PrintTitleI = (title: string) => string

// const printTitle: PrintTitleI = (title) => {
// 	return title
// }
// console.log(printTitle('Salami'));

// Бывает нам неизвестен входящий тип данных, в этом случае можно использовать unknown
//но данных тип накладывает определенные ограничения
//так как при использовании методов возникает ошибка

// const test:unknown = 'test'
// console.log(test.trim());

//Есть еще один тип never
// Обозначает что функция никогда и ничего не возвращает
//даже undefined

//========================================
// Interface - описание структуры входящих данных в наших компонентах
// например которые мы передаем через пропсы
// type - используется для базовых внутренных сущностей которые встречаются в разных местах нашего кода, к примеру если наше приложение продает пиццы, то каждую пиццу мы будем описывать с помощью type
// а внутри компонент для описание пропсов interface

// type Order = {
//     title: string
//     count: number
// }

// interface MyOrder {
//     title: string
//     count: number
// }

//Можно расширять типы из соседних типов или интерфейсов

// type X = {
//     a?: string
//     b?: number
// }

// type Y =X &{
//     c: string
//     d: number
// }

// let y:Y = {
//     c: 'test',
//     d: 10,
//     a: 'test2',
//     b: 29
// }

//===================================================================

// interface Auto {
//     counrty: string
// }

// interface BMW extends Auto {
//     model: string
//     year: number
// }

// const bmw: BMW = {
//     model: 'x5m',
//     year: 2023,
//     counrty: 'Germany',

// }

// Также можно расширять интерфейс с типом и наоборот

// type X = {
//     a: string
//     b: number
// }

// interface BMW extends X{
//     model: string
//     year: number
// }

// interface BMW{
//     model: string
//     year: number
// }

// type X = BMW &{
//     a: string
//     b: number
// }

const Examples: FC = () => {
	return <div></div>
}

export default Examples
