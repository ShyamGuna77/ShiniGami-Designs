
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Link href= "/">
        <div >
            <Image src= "/seven.svg" 

            width={75}
            height={90}
             alt ="Logo of image" 
             className='shrink-0 hover:opacity-75 transition-opacity duration-200 ease-in-out'
            />   
        </div>



    </Link>
  )
}

export default Logo