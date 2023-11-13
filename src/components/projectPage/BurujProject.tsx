import { useTranslation } from "react-i18next";
import NavBar from "../NavBar";
import { Button } from "../ui/button";
import ProjectCard from "./projectCard";
import { Castle,Trees,LucideBuilding,Building2,Workflow,Hotel,ShoppingCart, Bike, PlaneTakeoff, TreeDeciduousIcon, StarsIcon, SchoolIcon, School2 } from "lucide-react";
import { useLayoutEffect } from "react";
import Enquire from "../sections/Enquire";
import { Link } from "react-router-dom";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";
import Footer from "../sections/Footer";

const BurujProject = () => {
  const {t,i18n} = useTranslation();
  const isRTL = i18n.language === "ar"
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div className="project-page flex flex-col h-fit t-10 bg-white" dir={`${isRTL? "rtl":"ltr"}`}>
      <NavBar />

      <div
        className="relative bg-black project-bg flex flex-col regular items-start justify-center h-[120vh] p-10 bg-cover bg-center gap-2 sm:bg-auto">
        <div>
        <p className="md:text-[24px] light text-[8px]">{t("overview")}</p>
        <p className="md:text-[64px] text-[12px]">{t("buruj-c")}</p>
        </div>
        <p className="text-[22px] md:max-w-[75rem] light max-w-[40rem]">
          {t("project-placeholder")}
        </p>
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <div>
        <div className="w-1/4 h-[55px] bg-white rounded-t-[15px] text-primary text-[20px] mt-10  uppercase flex justify-center items-center">{t("info")}</div>
        <div className={`h-[268px] light text-black bg-opacity-60 bg-white backdrop-blur-2xl shadow-lg rounded-b-[20px] ${isRTL? "rounded-tl-[20px]":"rounded-tr-[20px]"} grid grid-cols-3 grid-rows-2`}>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Location</p> <p className="md:text-[14px] text-[10px]">Baghdad , Iraq</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Status</p> <p className="md:text-[14px] text-[10px]">Handover in 2023 (Phase 1)</p> </div>
  <div className="p-4 relative  flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Category</p> <p className="md:text-[14px] text-[10px]">Residential & Commercial Apartment</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Total towers</p> <p className="md:text-[14px] text-[10px]">31 tower</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Total units</p> <p className="md:text-[14px] text-[10px]">3800 unit</p> </div>
  <div className="p-4 relative  flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Gross site area</p> <p className="md:text-[14px] text-[10px]">290,727 m2</p> </div>


</div>
        </div> 
        <div className="flex flex-col gap-7 text-[24px] text-primary">
        <Enquire addNow v="default" enqq />
        <Button size="lg" variant="secondary">Construction update</Button>
        </div>
        </div>
        <div className="absolute flex justify-center uppercase items-center bg-white bottom-0 md:w-1/4 w-1/2 md:h-[10%] h-5 mt-5 rounded-t-[37px] left-1/2 transform -translate-x-1/2">
          <p className="md:text-4xl tex-2xl text-primary regular">Features</p>
        </div>

    </div>
    <div className="flex flex-col h-fit w-fit">
      <div className="flex justify-center items-center light md:text-2xl text-md text-[4D5053]">Highlights</div>
      <div className="p-5 my-10 h-fit w-fit flex flex-wrap gap-5 justify-center">
       <ProjectCard icon={Building2} title="Approximately 3800" description="Resedential Units" />
       <ProjectCard icon={LucideBuilding} title="30 Buildings" description="Resedential Apartments" />
       <ProjectCard icon={Trees} title="Views" description="Green Spaces" />
       <ProjectCard icon={Workflow} title="Architectural Design" description="Distinctive" />
       <ProjectCard icon={Castle} title="Attractions" description="Dancing Fountain" />
       <ProjectCard icon={ShoppingCart} title="Shopping" description="Luxurious Mall" />
       <ProjectCard icon={Bike} title="Amenities" description="Running and biking trails" />
       <ProjectCard icon={Hotel} title="Hotel" description="Five Stars" />
      </div>
    </div>
    <div className="flex flex-wrap h-[110vh] w-full justify-center items-center relative bg-black">
    <div className="overlay bg-primary-multiply-color h-full w-full"></div>
      <div className="project-1 w-1/2 h-fit flex flex-col text-center justify-center items-center absolute top-7 left-32">
        <div className="project1-img flex justify-center items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col justify-center items-start gap-2 m-5 w-full">
        <div className="project1-title text-5xl regular">Al Sorouh Towers</div>
        <div className="project1-des text-xl light">Baghdad, IRAQ</div>
          <Link to='sorouh-towers' className="z-10"> <Button className="text-sm regular" variant='default'>Explore Now</Button></Link>
          </div>
        </div>
        </div>
      </div>
      <div className="project-2 w-1/2 h-fit flex flex-col text-center justify-center items-center absolute bottom-7 right-32">
        <div className="project2-img flex justify-center items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col justify-center items-end text-center w-full gap-2 m-5">
        <div className="project2-title text-5xl regular">Al Hadeer Towers</div>
        <div className="project2-des text-xl light">Baghdad, IRAQ</div>
           <Link to='hadeer-towers' className="z-10"><Button className="text-sm regular" variant='default'>Explore Now</Button></Link>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center">
      <h1 className="regular flex justify-center items-center text-4xl text-primary-color m-3">Buruj Location <SewingPinFilledIcon className="text-primary-color" height={35} width={35} /></h1>
      <h1 className="light text-md text-black m-1">NEAR BAGHDAD INTERNATIONAL AIRPORT</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22738.800608238977!2d44.25978260745961!3d33.26440190239908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1559d764b9df63e3%3A0x42b43a07bb92d281!2sBuruj%20Residential%20Project!5e0!3m2!1sen!2seg!4v1698885424232!5m2!1sen!2seg" width="1000" height="400" className="border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div className="flex flex-col h-fit w-fit">
      <div className="flex justify-center items-center regular text-xl text-primary-color mt-10">NEAR BURUJ</div>
      <div className="p-5 my-5 h-fit w-fit flex flex-wrap gap-5 justify-center">
       <ProjectCard icon={PlaneTakeoff} title="Baghdad Airport" description="6 Minutes" />
       <ProjectCard icon={TreeDeciduousIcon} title="Green Zone" description="16 Minutes" />
       <ProjectCard icon={School2} title="The Iraq Museum" description="22 Minutes" />
       <ProjectCard icon={StarsIcon} title="Baghdad Exhibition" description="17 Minutes" />
       <ProjectCard icon={Building2} title="Karada" description="22 Minutes" />
       <ProjectCard icon={SchoolIcon} title="Baghdad University" description="20 Minutes" />
       <ProjectCard icon={Bike} title="Tahrir Square" description="21 Minutes" />
      </div>
    </div>
    <div className="right-left-divider my-10 flex justify-center w-full items-center">
      <div className="left-divider h-0.5 w-1/3 bg-primary-color"></div>
      <Enquire addNow v="default" enqq />
      <div className="right-divider h-0.5 w-1/3 bg-primary-color"></div>
    </div>
    <div className="right-left-divider flex justify-center w-full items-center mt-3">
      <div className="left-divider h-0.5 w-1/3 bg-primary-color"></div>
     <Link to="/image-gallery"><Button size="lg" className="regular">Image Gallery</Button></Link>
      <div className="right-divider h-0.5 w-1/3 bg-primary-color"></div>
    </div>
    </div>
    <Footer />
 </div>
      
      
  );
};

export default BurujProject;
