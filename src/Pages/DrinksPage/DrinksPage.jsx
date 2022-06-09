import React, { useState } from 'react';

import { connect } from 'react-redux'

import Chevron from 'react-chevron'
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Prodact'
import Navigation from '../../components/Navigation/Navigation';

import MainImage from '../../images/bkg.jpg';

import useStyles from './styles';

const DrinksPage = ( { products } ) => {

  const classNames = useStyles();
  
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);

  return (
    <div className={classNames.container}>
      <div className={classNames.section}>
        <div
            className={classNames.mainImage}
            style={{
              background: `url(${MainImage}) center center/cover no-repeat`,
            }}>
          <Navigation
            title='Drinks'
          />
          <div className={classNames.menuList}>
              <ul className={classNames.list}>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Cocktails</p>
                    <button onClick={() => setOpen1(!open1)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open1 && 
                    <div>{products.filter((item) => item.variant === 'Cocktails').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Whiskey</p>
                    <button onClick={() => setOpen2(!open2)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open2 && 
                    <div>{products.filter((item) => item.variant === 'Whiskey').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Rum</p>
                    <button onClick={() => setOpen3(!open3)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open3 && 
                    <div>{products.filter((item) => item.variant === 'Rum').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Gin</p>
                    <button onClick={() => setOpen4(!open4)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open4 && 
                    <div>{products.filter((item) => item.variant === 'Gin').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Vodka</p>
                    <button onClick={() => setOpen5(!open5)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open5 && 
                    <div>{products.filter((item) => item.variant === 'Vodka').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Tequila</p>
                    <button onClick={() => setOpen6(!open6)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open6 && 
                    <div>{products.filter((item) => item.variant === 'Tequila').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Brandy & Cognac</p>
                    <button onClick={() => setOpen7(!open7)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open7 && 
                    <div>{products.filter((item) => item.variant === 'Brandy & Cognac').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Liqueur & Bitters</p>
                    <button onClick={() => setOpen8(!open8)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open8 && 
                    <div>{products.filter((item) => item.variant === 'Liqueur & Bitters').map(product => (
                      <Product key={product.id} product = {product}/>
                      ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Champagne & Sparkling Wine</p>
                    <button onClick={() => setOpen(!open8)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open && 
                    <div>{products.filter((item) => item.variant === 'Champagne & Sparkling Wine').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Wine</p>
                    <button onClick={() => setOpen9(!open9)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open9 && 
                    <div>{products.filter((item) => item.variant === 'Wine').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Beer</p>
                    <button onClick={() => setOpen10(!open10)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open10 && 
                    <div>{products.filter((item) => item.variant === 'Beer').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Soft Drinks</p>
                    <button onClick={() => setOpen11(!open11)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open11 && 
                    <div>{products.filter((item) => item.variant === 'Soft Drinks').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Mocktails</p>
                    <button onClick={() => setOpen12(!open12)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open12 && 
                    <div>{products.filter((item) => item.variant === 'Mocktails').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Tea & Coffee</p>
                    <button onClick={() => setOpen13(!open13)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open13 && 
                    <div>{products.filter((item) => item.variant === 'Tea & Coffee').map(product => (
                      <Product key={product.id} product = {product}/>
                    ))}</div>
                  }
                </li>
                <li className={classNames.item}>
                  <div className={classNames.menuItem}>
                    <p className={classNames.menuItemTitle}>Snacks</p>
                    <button onClick={() => setOpen14(!open14)} className={classNames.button} ><Chevron/></button>
                  </div>
                  {open14 && 
                    <div>{products.filter((item) => item.variant === 'Snacks').map(product => (
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

export default connect(mapStateProps)(DrinksPage);
