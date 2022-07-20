import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'
import OwnerProfileForm from './OwnerProfileForm'
import Navbar from './Navbar'

function Login() {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth.user)

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/pets')
  //   }
  //   console.log(isAuthenticated)
  //   // console.log(user)
  //   // console.log(user === {})
  // }, [isAuthenticated])

  function handleLogoff(e) {
    e.preventDefault()
    // console.log('log off')
    logout()
  }

  function handleRegister(e) {
    e.preventDefault()
    // console.log('register')
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    // console.log('sign in')
    loginWithRedirect()
  }

  return (
    <div className='mx-auto'>
      <header className='flex bg-slate-800 mb-8 mx-auto items-center'>
        <div className='w-full'>
          <img
            className='w-20 rounded-full ml-12'
            src={'./images/pawalker-logo.png'}
            alt='logo'
          />
          <strong className=' text-2xl ml-10 text-white drop-shadow-[0_0.5px_0.5px_rgba(250,240,250)] -tracking-tight'>
            PaWalker
          </strong>
        </div>
        <div className=' w-11/12 flex mr-2'>
          <IfAuthenticated>
            <div className='inline-flex'>
              <div className='float-left mr-5'>
                <button className='w-30 h-full inline-flex items-center justify-center rounded-md border border-orange-500 py-1 px-3 text-center text-base text-orange-500 tracking-wider transition hover:border-primary hover:bg-orange-500 hover:text-white lg:px-8 xl:px-10'>
                
                    <a href='/' onClick={handleLogoff}>
                      Log off
                    </a>
                
                
                </button>
              </div>
              <div className='float-left mr-5'>
                <button className='w-30 h-full inline-flex items-center justify-center rounded-md border border-orange-500 mr-2 py-1 px-3 text-center text-base text-orange-500 tracking-wider transition hover:border-primary hover:bg-orange-500 hover:text-white lg:px-8 xl:px-10'>
                <a href='/' onClick={handleRegister}>
                  Register
                </a>
                            </button>
              </div>
              <div className='ml-2 float-right'><Navbar/></div>
            </div>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <button className='w-2/5 inline-flex items-center justify-center rounded-md border border-orange-500 mr-2 py-4 px-10 text-center text-base text-orange-500 tracking-wider transition hover:border-primary hover:bg-orange-500 hover:text-white lg:px-8 xl:px-10'>
              <a href='/' onClick={handleSignIn}>
                Sign in
              </a>
            </button>
            <button className='w-2/5 inline-flex items-center justify-center rounded-md border border-orange-500 py-4 px-10 text-center text-base text-orange-500 tracking-wider transition hover:border-primary hover:bg-orange-500 hover:text-white lg:px-8 xl:px-10'>
              <a href='/' onClick={handleRegister}>
                Register
              </a>
            </button>
          </IfNotAuthenticated>
        </div>
      </header>
      <main>
        <section className=' overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]'>
          <div className='container'>
            <div className='-mx-4 flex flex-wrap items-center justify-between'>
              <div className='w-full px-4 lg:w-6/12'>
                <div className='-mx-3 flex items-center sm:-mx-4'>
                  <div className='w-full px-3 sm:px-4 xl:w-1/2'>
                    <div className='py-3 sm:py-4'>
                      <img
                        src='assets/images/about/image-1.jpg'
                        alt=''
                        className='w-full rounded-2xl'
                      />
                    </div>
                    <div className='py-3 sm:py-4'>
                      <img
                        src='assets/images/about/image-2.jpg'
                        alt=''
                        className='w-full rounded-2xl'
                      />
                    </div>
                  </div>
                  <div className='w-full px-3 sm:px-4 xl:w-1/2'>
                    <div className='relative z-10 my-4 shadow-xl'>
                      <img
                        src='https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                        alt=''
                        className='w-full rounded-2xl'
                      />
                      <span className='absolute -right-7 -bottom-7 z-[-1]'>
                        <svg
                          width='134'
                          height='106'
                          viewBox='0 0 134 106'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx='1.66667'
                            cy='104'
                            r='1.66667'
                            transform='rotate(-90 1.66667 104)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='16.3333'
                            cy='104'
                            r='1.66667'
                            transform='rotate(-90 16.3333 104)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='31'
                            cy='104'
                            r='1.66667'
                            transform='rotate(-90 31 104)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='45.6667'
                            cy='104'
                            r='1.66667'
                            transform='rotate(-90 45.6667 104)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='60.3334'
                            cy='104'
                            r='1.66667'
                            transform='rotate(-90 60.3334 104)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='88.6667'
                            cy='104'
                            r='1.66667'
                            transform='rotate(-90 88.6667 104)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='117.667'
                            cy='104'
                            r='1.66667'
                            transform='rotate(-90 117.667 104)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='74.6667'
                            cy='104'
                            r='1.66667'
                            transform='rotate(-90 74.6667 104)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='103'
                            cy='104'
                            r='1.66667'
                            transform='rotate(-90 103 104)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='132'
                            cy='104'
                            r='1.66667'
                            transform='rotate(-90 132 104)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='1.66667'
                            cy='89.3333'
                            r='1.66667'
                            transform='rotate(-90 1.66667 89.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='16.3333'
                            cy='89.3333'
                            r='1.66667'
                            transform='rotate(-90 16.3333 89.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='31'
                            cy='89.3333'
                            r='1.66667'
                            transform='rotate(-90 31 89.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='45.6667'
                            cy='89.3333'
                            r='1.66667'
                            transform='rotate(-90 45.6667 89.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='60.3333'
                            cy='89.3338'
                            r='1.66667'
                            transform='rotate(-90 60.3333 89.3338)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='88.6667'
                            cy='89.3338'
                            r='1.66667'
                            transform='rotate(-90 88.6667 89.3338)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='117.667'
                            cy='89.3338'
                            r='1.66667'
                            transform='rotate(-90 117.667 89.3338)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='74.6667'
                            cy='89.3338'
                            r='1.66667'
                            transform='rotate(-90 74.6667 89.3338)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='103'
                            cy='89.3338'
                            r='1.66667'
                            transform='rotate(-90 103 89.3338)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='132'
                            cy='89.3338'
                            r='1.66667'
                            transform='rotate(-90 132 89.3338)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='1.66667'
                            cy='74.6673'
                            r='1.66667'
                            transform='rotate(-90 1.66667 74.6673)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='1.66667'
                            cy='31.0003'
                            r='1.66667'
                            transform='rotate(-90 1.66667 31.0003)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='16.3333'
                            cy='74.6668'
                            r='1.66667'
                            transform='rotate(-90 16.3333 74.6668)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='16.3333'
                            cy='31.0003'
                            r='1.66667'
                            transform='rotate(-90 16.3333 31.0003)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='31'
                            cy='74.6668'
                            r='1.66667'
                            transform='rotate(-90 31 74.6668)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='31'
                            cy='31.0003'
                            r='1.66667'
                            transform='rotate(-90 31 31.0003)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='45.6667'
                            cy='74.6668'
                            r='1.66667'
                            transform='rotate(-90 45.6667 74.6668)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='45.6667'
                            cy='31.0003'
                            r='1.66667'
                            transform='rotate(-90 45.6667 31.0003)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='60.3333'
                            cy='74.6668'
                            r='1.66667'
                            transform='rotate(-90 60.3333 74.6668)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='60.3333'
                            cy='30.9998'
                            r='1.66667'
                            transform='rotate(-90 60.3333 30.9998)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='88.6667'
                            cy='74.6668'
                            r='1.66667'
                            transform='rotate(-90 88.6667 74.6668)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='88.6667'
                            cy='30.9998'
                            r='1.66667'
                            transform='rotate(-90 88.6667 30.9998)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='117.667'
                            cy='74.6668'
                            r='1.66667'
                            transform='rotate(-90 117.667 74.6668)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='117.667'
                            cy='30.9998'
                            r='1.66667'
                            transform='rotate(-90 117.667 30.9998)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='74.6667'
                            cy='74.6668'
                            r='1.66667'
                            transform='rotate(-90 74.6667 74.6668)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='74.6667'
                            cy='30.9998'
                            r='1.66667'
                            transform='rotate(-90 74.6667 30.9998)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='103'
                            cy='74.6668'
                            r='1.66667'
                            transform='rotate(-90 103 74.6668)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='103'
                            cy='30.9998'
                            r='1.66667'
                            transform='rotate(-90 103 30.9998)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='132'
                            cy='74.6668'
                            r='1.66667'
                            transform='rotate(-90 132 74.6668)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='132'
                            cy='30.9998'
                            r='1.66667'
                            transform='rotate(-90 132 30.9998)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='1.66667'
                            cy='60.0003'
                            r='1.66667'
                            transform='rotate(-90 1.66667 60.0003)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='1.66667'
                            cy='16.3333'
                            r='1.66667'
                            transform='rotate(-90 1.66667 16.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='16.3333'
                            cy='60.0003'
                            r='1.66667'
                            transform='rotate(-90 16.3333 60.0003)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='16.3333'
                            cy='16.3333'
                            r='1.66667'
                            transform='rotate(-90 16.3333 16.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='31'
                            cy='60.0003'
                            r='1.66667'
                            transform='rotate(-90 31 60.0003)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='31'
                            cy='16.3333'
                            r='1.66667'
                            transform='rotate(-90 31 16.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='45.6667'
                            cy='60.0003'
                            r='1.66667'
                            transform='rotate(-90 45.6667 60.0003)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='45.6667'
                            cy='16.3333'
                            r='1.66667'
                            transform='rotate(-90 45.6667 16.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='60.3333'
                            cy='60.0003'
                            r='1.66667'
                            transform='rotate(-90 60.3333 60.0003)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='60.3333'
                            cy='16.3333'
                            r='1.66667'
                            transform='rotate(-90 60.3333 16.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='88.6667'
                            cy='60.0003'
                            r='1.66667'
                            transform='rotate(-90 88.6667 60.0003)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='88.6667'
                            cy='16.3333'
                            r='1.66667'
                            transform='rotate(-90 88.6667 16.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='117.667'
                            cy='60.0003'
                            r='1.66667'
                            transform='rotate(-90 117.667 60.0003)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='117.667'
                            cy='16.3333'
                            r='1.66667'
                            transform='rotate(-90 117.667 16.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='74.6667'
                            cy='60.0003'
                            r='1.66667'
                            transform='rotate(-90 74.6667 60.0003)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='74.6667'
                            cy='16.3333'
                            r='1.66667'
                            transform='rotate(-90 74.6667 16.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='103'
                            cy='60.0003'
                            r='1.66667'
                            transform='rotate(-90 103 60.0003)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='103'
                            cy='16.3333'
                            r='1.66667'
                            transform='rotate(-90 103 16.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='132'
                            cy='60.0003'
                            r='1.66667'
                            transform='rotate(-90 132 60.0003)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='132'
                            cy='16.3333'
                            r='1.66667'
                            transform='rotate(-90 132 16.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='1.66667'
                            cy='45.3333'
                            r='1.66667'
                            transform='rotate(-90 1.66667 45.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='1.66667'
                            cy='1.66683'
                            r='1.66667'
                            transform='rotate(-90 1.66667 1.66683)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='16.3333'
                            cy='45.3333'
                            r='1.66667'
                            transform='rotate(-90 16.3333 45.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='16.3333'
                            cy='1.66683'
                            r='1.66667'
                            transform='rotate(-90 16.3333 1.66683)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='31'
                            cy='45.3333'
                            r='1.66667'
                            transform='rotate(-90 31 45.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='31'
                            cy='1.66683'
                            r='1.66667'
                            transform='rotate(-90 31 1.66683)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='45.6667'
                            cy='45.3333'
                            r='1.66667'
                            transform='rotate(-90 45.6667 45.3333)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='45.6667'
                            cy='1.66683'
                            r='1.66667'
                            transform='rotate(-90 45.6667 1.66683)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='60.3333'
                            cy='45.3338'
                            r='1.66667'
                            transform='rotate(-90 60.3333 45.3338)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='60.3333'
                            cy='1.66683'
                            r='1.66667'
                            transform='rotate(-90 60.3333 1.66683)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='88.6667'
                            cy='45.3338'
                            r='1.66667'
                            transform='rotate(-90 88.6667 45.3338)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='88.6667'
                            cy='1.66683'
                            r='1.66667'
                            transform='rotate(-90 88.6667 1.66683)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='117.667'
                            cy='45.3338'
                            r='1.66667'
                            transform='rotate(-90 117.667 45.3338)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='117.667'
                            cy='1.66683'
                            r='1.66667'
                            transform='rotate(-90 117.667 1.66683)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='74.6667'
                            cy='45.3338'
                            r='1.66667'
                            transform='rotate(-90 74.6667 45.3338)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='74.6667'
                            cy='1.66683'
                            r='1.66667'
                            transform='rotate(-90 74.6667 1.66683)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='103'
                            cy='45.3338'
                            r='1.66667'
                            transform='rotate(-90 103 45.3338)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='103'
                            cy='1.66683'
                            r='1.66667'
                            transform='rotate(-90 103 1.66683)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='132'
                            cy='45.3338'
                            r='1.66667'
                            transform='rotate(-90 132 45.3338)'
                            fill='#3056D3'
                          ></circle>
                          <circle
                            cx='132'
                            cy='1.66683'
                            r='1.66667'
                            transform='rotate(-90 132 1.66683)'
                            fill='#3056D3'
                          ></circle>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" px-4 lg:w-1/2 xl:w-5/12">
                <div className="ml-10 mt-10 lg:mt-0">
                  
                  <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                   Dog Walking in your Neighborhood.
                  </h2>

                  <p className='mb-8 text-sm text-body-color'>
                    Our Story, We are a small team of NZ Junior Devs and we have developed
                    an web application for assistance on getting someone to walk your pet
                    The journey to relaxation. Finding a solution to avoid walking your
                    pets didn’t happen overnight.
                  </p>
                  <p className='mb-8 text-sm text-body-color'>
                    It started off with discovery and research from the great minds of
                    PaWalker, and took a lot of hard work to bring the easiest, most
                    intuitive, and thoughtfully crafted website to your backyard.
                    Transforming communities. We hope to bring our ideas out to other
                    regions but in the meantime it is only NZ based. How we got here.
                  </p>
                  <p className='mb-8 text-sm text-body-color'>
                    In 2022, while we were assigned to our groups final project, our
                    co-founder Jay embarked on an impromptu technological adventure that
                    led him to a brilliant idea This website is unlike anything Jay had
                    ever seen or felt before, and he knew he had to share them with the
                    world. A pet is the only thing on earth that loves you more than
                    he/she loves himself/herself.
                  </p>

                  <a
                    href='javascript:void(0)'
                    alt=''
                    className='inline-flex items-center justify-center rounded-lg bg-primary py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10'
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <OwnerProfileForm /> */}
    </div>
  )
}
export default Login
