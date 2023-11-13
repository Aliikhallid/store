// import React from 'react'

import { InstagramLogoIcon, MobileIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"

const Footer = () => {
  return (
<div className="footer flex w-full h-96 justify-around items-center relative light bg-white text-primary-color">
  <div className="social-foot">
  <h1 className="regular text-2xl">About Modon</h1>
           <p>Modon knows no boundaries for leadership.</p>
           <p>We work today to shape the future.</p>
           {/* <TitleDivider name="Social" /> */}
           <div className="social-foot flex gap-3 mt-3">
             <InstagramLogoIcon />
             <InstagramLogoIcon />
             <InstagramLogoIcon />
             <InstagramLogoIcon />
           </div>
  </div>
  <div>
           <h1 className="regular text-2xl">Quick Links</h1>
           <div className=" m-1">Home</div>
           <div className=" m-1">About Us</div>
           <div className="m-1">Construction Updates</div>
           <div className="m-1">Contact</div>
         </div>
         <div className="">
           <h1 className="regular text-2xl">Privacy Links</h1>
           <div className=" m-1">Privacy Policy</div>
           <div className=" m-1">Terms & Conditions</div>
           <div className=" m-1">FAQ</div>
           <div className=" m-1">Enquire Now</div>
         </div>
 <div className="head-off">
       <h1 className="regular text-2xl">Head Office</h1>
       <p className="w-max m-1">Al Mamoon District, Al Nossor Area
                          Near Baghdad Tower, Baghdad, Iraq</p>
                          <div className="flex flex-col">
        <div className="flex">
           <div className="second-footer-item m-1 flex gap-2"><MobileIcon height={20} width={20}/> <h1>+964 770 0300 005</h1></div>
           <div className="second-footer-item m-1 flex gap-2"><EnvelopeClosedIcon height={20} width={20}/> <h1>Info@modoniq.com</h1>
        </div>
                          </div>
        <div className="flex m-2">
          <div className="footer-mobile"></div>
          <div className="footer-mobil2"></div>
        </div>
      </div>
       </div>
         <div className="third-footer h-10 w-full bg-primary-color absolute left-0 bottom-0 light flex justify-around items-center text-white">
         <h1>Copyright © 2023. All Rights Reserved</h1>
         <h1>Powered by ADZone</h1>
       </div>
</div>
  )
}

export default Footer