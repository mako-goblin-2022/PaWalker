import React from 'react'

function Footer() {
  return (
    <footer className="w-full flex h-6 bg-stone-600 text-slate-50 justify-around ">
      <div>
        <a classname="p-1" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-google"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-skype"></ion-icon>
        </a>
      </div>
    </footer>
  )
}

export default Footer
