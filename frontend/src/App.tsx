import cap from './assets/capuc.png'
import lat from './assets/lat.png'
import mac from './assets/mac.png'
import exc from './assets/exc.png'
import bg1 from './assets/bg1.png'
import pl from './assets/pl.png'
import bb from './assets/beans.png'
import bb1 from './assets/bb1.png'
import bb2 from './assets/bb2.png'
import bb3 from './assets/bb3.png'
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
      <section className="flex justify-evenly items-center flex-col w-full px h-[90vh]">
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
    <section className='flex flex-col items-center justify-evenly  w-full h-[65vh]'>
      <h2 className='text-6xl text-[#603809] font-bold font-playfair'>Why are we different?</h2>
      <p className='text-[#707070] font-light font-playfair text-xl'>We don’t just make your coffee, we make your day!</p>
      <div className='flex justify-evenly w-[70vw]'>
        <div className='w-[14vw] h-[30vh] bg-[#FFF9F1] flex flex-col justify-evenly items-center hover:bg-[#FFEED8] duration-300 ease-in-out'>
          <img src={bb}/>
          <p className='text-[#603809] text-2xl font-bold font-playfair'>Supreme Beans</p>
          <p className='text-[#707070] text-lg font-playfair w-[10vw] text-center font-medium'>Beans that provides great taste</p>
        </div>
        <div className='w-[14vw] h-[30vh] bg-[#FFF9F1] flex flex-col justify-evenly items-center hover:bg-[#FFEED8] duration-300 ease-in-out'>
          <img src={bb1}/>
          <p className='text-[#603809] text-2xl font-bold font-playfair'>High Quality</p>
          <p className='text-[#707070] text-lg font-playfair w-[10vw] text-center font-medium'>We provide the highest quality</p>
        </div>
        <div className='w-[14vw] h-[30vh] bg-[#FFF9F1] flex flex-col justify-evenly items-center hover:bg-[#FFEED8] duration-300 ease-in-out'>
          <img src={bb2}/>
          <p className='text-[#603809] text-2xl font-bold font-playfair'>Extraordinary </p>
          <p className='text-[#707070] text-lg font-playfair w-[10vw] text-center font-medium'>Coffee like you have never tasted</p>
        </div>
        <div className='w-[14vw] h-[30vh] bg-[#FFF9F1] flex flex-col justify-evenly items-center hover:bg-[#FFEED8] duration-300 ease-in-out'>
          <img src={bb3}/>
          <p className='text-[#603809] text-2xl font-bold font-playfair'>Affordable Price</p>
          <p className='text-[#707070] text-lg font-playfair w-[10vw] text-center font-medium'>Our Coffee prices are easy to afford</p>
        </div>
      </div>
      <p className='text-[#707070] text-lg font-playfair'>Great ideas start with great coffee, Lets help you achieve that</p>
      <p className='text-[#603809] text-3xl font-bold font-playfair'>Get started today.</p>
      <button className="bg-[#F9C06A] w-33 h-10  rounded-3xl font-bold  font-playfair">Join Us</button>
    </section>
   </main>
  );
}
