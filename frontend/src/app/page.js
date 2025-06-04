import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
export default function Home() {
  return ( 
    <div>
      <Navbar></Navbar>
      <div className="bg-blue-200">
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
      <Footer></Footer>
    </div>
    
  );
}