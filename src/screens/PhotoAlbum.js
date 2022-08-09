import React from 'react';
import { GlobalNavbar } from '../components/Nav/GlobalNavbar';
import { Photos } from '../components/Photos/Photos';
import Footer from '../components/Footer/Footer';

export const PhotoAlbum = (props) => {
  return (
    <>
      <GlobalNavbar active={props.active}/>
      <Photos/>
      <Footer/>
    </>
  )
}
