import React, { useState } from "react";
import Header from "../../components/comman/header";
import  TabOptions from "../../components/comman/tabOptions"
import Footer from "../../components/comman/footer";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/diningOut";
import NightLife from "../../components/nigthLife";

const HomePage = () => {

    const [activeTab, setActiveTab]=useState("Delivery")

  return (
    <div>
     <Header/>
     <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
     {/* from here in website different option have screen */}
     {getCorrectScreen(activeTab)}
     <Footer />
    
    </div>
  );
};

const getCorrectScreen=(tab) =>{
    switch (tab) {
        case "Delivery":
            return <Delivery />;
        case "Dining Out":
            return <DiningOut />;
        case "Nightlife":
            return <NightLife />;
        default:
            return <Delivery />;

    
    }
}

export default HomePage;
