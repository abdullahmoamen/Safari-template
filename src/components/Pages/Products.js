import React from 'react'
import '../../app.css'
import CardItem from '../CardItem';
import '../../components/Cards.css'
import img9 from '../../images/img-1.jpg'
import img2 from '../../images/img-5.jpg'
import img3 from '../../images/img-6.jpg'
import img8 from '../../images/img-7.jpg'
import img4 from '../../images/img-8.jpg'
import img0 from '../../images/img-home.jpg'
import img5 from '../../images/img-2.jpg'
import img6 from '../../images/img-3.jpg'
import img1 from '../../images/img-9.jpg'
import img7 from '../../images/img-4.jpg'



function Products(){
    return (
        <div className="cards page1">
                <h1 className="cards__header title">Check Out These EPIC Destinations!</h1>
                <div className="cards__container cards0">
                    <div className="cards__wrapper">
                    <ul className='cards__items'>
            <CardItem
            src={img0}
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Adventure'
            path='/services'
            />
            <CardItem
            src={img1}
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Adventure'
            path='/services'
            />
                </ul>
            <ul className='cards__items'>
            <CardItem
            src={img2}
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Adventure'
            path='/services'
            />
            <CardItem
            src={img3}
            text='Experience Football on Top of the Himilayan Mountains'
            label='Sporting'
            path='/services'
            />
            <CardItem
            src={img4}
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/products'
            />
            <CardItem
            src={img5}
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/products'
            />
        </ul>
        <ul className='cards__items'>
            <CardItem
            src={img6}
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/products'
            />
            <CardItem
            src={img7}
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/products'
            />
            <CardItem
            src={img8}
            text='Ride through the Sahara Desert on a guided camel tour'
            label='Adrenaline'
            path='/sign-up'
            />
            <CardItem
            src={img9}
            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
            label='Mystery'
            path='/services'
            />
        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Products