import React, { useState } from 'react';

import { connect } from 'react-redux'

import Chevron from 'react-chevron'
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Prodact'
import Navigation from '../../components/Navigation/Navigation';

import MainImage from '../../images/bkg.jpg';

import useStyles from './styles';

const FoodPage = ({ products }) => {

  const classNames = useStyles();
  
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
 
  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <div
            className={classNames.mainImage}
            style={{
              background: `url(${MainImage}) center center/cover no-repeat `,
            }}>
          <Navigation
            title='Food'
          />
          <div className={classNames.menuList}>
              <ul className={classNames.list}>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Soups</p>
                    <button onClick={() => setOpen1(!open1)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open1 && 
                    <div>{products.filter((item) => item.variant === 'Soups').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Appetizers</p>
                    <button onClick={() => setOpen2(!open2)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open2 && 
                    <div>{products.filter((item) => item.variant === 'Appetizers').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Salads</p>
                    <button onClick={() => setOpen3(!open3)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open3 && 
                    <div>{products.filter((item) => item.variant === 'Salads').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Main Course</p>
                    <button onClick={() => setOpen4(!open4)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open4 && 
                    <div>{products.filter((item) => item.variant === 'Main Course').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Sauces & Extras</p>
                    <button onClick={() => setOpen5(!open5)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open5 && 
                    <div>{products.filter((item) => item.variant === 'Sauces & Extras').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Desert</p>
                    <button onClick={() => setOpen(!open)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open && 
                    <div>{products.filter((item) => item.variant === 'Desert').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
              </ul>
          </div>
        </div>

      <Footer/>
      </div>
    </div>
  );
};

const mapStateProps = state =>{
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateProps)(FoodPage);

