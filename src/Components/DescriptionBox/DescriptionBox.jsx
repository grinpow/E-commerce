import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that
                buying and selling of products or services over internet
                servers as a virtual marketplace where business and indivudial
                showcase their products, interact with costumers transactions 
                whitout the need for a physical precence.
            </p>
            <p>E commerce websites typically display products or services a detailed
                description, images, prices, and any available. Each product usually has its own
                with relevant information</p>
        </div>
    </div>
  )
}

export default DescriptionBox