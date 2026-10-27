import cap from './assets/capuc.png'
import lat from './assets/lat.png'
import mac from './assets/mac.png'
import exc from './assets/exc.png'
import bg1 from './assets/bg1.png'
import pl from './assets/pl.png'
export default function App() {
  return (
   <main>
      <section className="w-full h-[90vh] bg-[url(src/assets/cofe.png)] bg-no-repeat bg-size-[100%] bg-center"></section>
      <section className=' w-full flex justify-evenly items-center'>
        <div className='w-[35vw] flex flex-col justify-evenly h-[37vh]'>
          <h2 className='text-5xl text-[#603809] font-bold font-playfair '>Discover the best coffee</h2>
          <p className='text-[#707070] font-light font-playfair text-lg/9'>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
          <button className='bg-[#F9C06A] w-33 h-10  rounded-3xl font-bold'>Learn More</button>
        </div>
        <img src={bg1}/>
      </section>
      <section className="flex justify-evenly items-center flex-col w-full px h-170 px">
        <img src={pl} className='relative right-[40vw] top-10 '/>
        <h1 className="text-7xl text-[#603809] font-bold font-playfair">Enjoy a new blend of coffee style</h1>
        <p className="text-[#707070] font-light font-playfair text-lg">Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
        <div className="flex justify-evenly items-center w-300">
          <div className="bg-[#FFF9F1] border rounded-sm border-[#F9C06A] h-95 px flex flex-col justify-between">
            <img src={cap}/>
            <p className="text-[#603809] text-xl font-extrabold text-center font-playfair">Cappuccino</p>
            <p className="text-[#603809] text-base font-light text-center font-playfair">Coffee 50% | Milk 50%</p>
            <p className="text-[#603809] font-bold text-lg text-center font-playfair">$8.50</p>
            <button className="bg-[#F9C06A] w-33 h-10  rounded-3xl font-bold relative top-5 left-19 font-playfair">Order Now</button>
          </div>
        
          <div className="bg-[#FFF9F1] border rounded-sm border-[#F9C06A] h-95 px flex flex-col justify-between">
            <img src={lat}/>
            <p className="text-[#603809] text-xl font-extrabold text-center font-playfair">Chai Latte</p>
            <p className="text-[#603809] text-base font-light text-center font-playfair">Coffee 50% | Milk 50%</p>
            <p className="text-[#603809] font-bold text-lg text-center font-playfair">$8.50</p>
            <button className="bg-[#F9C06A] w-33 h-10  rounded-3xl font-bold relative top-5 left-19 font-playfair">Order Now</button>
          </div>
        
          <div className=" bg-[#FFF9F1] border rounded-sm border-[#F9C06A] h-95 px flex flex-col justify-between">
            <img src={mac}/>
            <p className="text-[#603809] text-xl font-extrabold text-center font-playfair">Macchiato</p>
            <p className="text-[#603809] text-base font-light text-center font-playfair">Coffee 50% | Milk 50%</p>
            <p className="text-[#603809] font-bold text-lg text-center font-playfair">$8.50</p>
            <button className="bg-[#F9C06A] w-33 h-10  rounded-3xl font-bold relative top-5 left-19 font-playfair">Order Now</button>
          </div>
        
          <div className="bg-[#FFF9F1] border rounded-sm border-[#F9C06A] h-95 px flex flex-col justify-between">
            <img src={exc}/>
            <p className="text-[#603809] text-xl font-extrabold text-center font-playfair">Expresso</p>
            <p className="text-[#603809] text-base font-light text-center font-playfair">Coffee 50% | Milk 50%</p>
            <p className="text-[#603809] font-bold text-lg text-center font-playfair">$8.50</p>
            <button className="bg-[#F9C06A] w-33 h-10  rounded-3xl font-bold relative top-5 left-19 font-playfair">Order Now</button>
          </div>
        </div>
      </section>
   </main>
  );
}
