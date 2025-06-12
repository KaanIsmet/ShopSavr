"use client"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Reminders from "@/components/reminders";
import Assistant from "@/components/assistant";
import Image from "next/image";
import MoreFeatures from "@/components/more_features";
import CallToAction from "@/components/call_to_action";
import {SmoothScrolling} from "@/components/smooth_scroll";

export default function Home() {
  //SmoothScrolling()
  return ( 
    <div>
      <Navbar></Navbar>
      <div className=" bg-blue-200 h-200 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1 className="text-5xl text-bold">Stop Overpaying.<br/> Start saving.</h1>
          <div className="flex justify-between items-start">
            <span className="text-2xl italic text-bold"> Create shopping lists, track prices, and find <br/>
            hidden discounts—all in one app.</span>
            <Image
              src={"iphone1.svg"}
              alt="Iphone logo 1"
              height={800}
              width={400}
            />
          </div>
        </div>
        
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div id="features" className="flex justify-center  py-10 border-b border-blue-500 px-4 max-w-7xl mx-auto">
        <div className="max-w-7xl px-2">
          <Image
            src={"deal.svg"}
            alt="Deal logo"
            height={100}
            width={100}
          />
          <span className="font-bold">
            Find the best deals
          </span>
          <br/>
          <br/>
          <span className="italic">
            Quickly discover the lowest<br/> prices from top stores like<br/> eBay and Best Buy.
          </span>
        </div>
        <div className="max-w-7xl mx-50 px-4">
          <Image
            src={"cart.svg"}
            alt="Cart logo"
            height={100}
            width={100}
          />
          <span className="font-bold">
            Smart shopping lists
          </span>
          <br/>
          <br/>
          <span className="italic">
            Create custom lists for<br/> anything — groceries, tech,<br/> gifts, and more
          </span>
        </div>
        <div className="max-w-7xl px-4">
          <Image
            src={"link.svg"}
            alt="Link logo"
            height={100}
            width={100}
          />
          <span className="font-bold">
            Easy Checkout Links
          </span>
          <br/>
          <br/>
          <span className="italic">
            Go straight to the store to buy<br/> what you need — no hassle.
          </span>
        </div>
        <br/>
      </div>
      <br/>
      <Reminders></Reminders>
      <Assistant></Assistant>
      <MoreFeatures></MoreFeatures>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
    
  );
}