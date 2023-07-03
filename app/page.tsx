import Link from "next/link"
import Footer from "./ui/(main)/footer"
import FirstContent from "./ui/(main)/firstContent"
import SecondContent from "./ui/(main)/secondContent"
import ThirdContent from "./ui/(main)/thirdContent"
import "./globals.css"

// const dum = {
//   list: ["single", "pair"],
//   link: ["/single", "/pair"],
// }

// {dum.list.map((item, index) => (
//   <div key={item}>
//     <Link href={dum.link[index]}>{item}</Link>
//   </div>
// ))}

const Home = () => {
  return (
    <div>
      <FirstContent />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e6fdff"
          fillOpacity="1"
          d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,176C672,192,768,192,864,186.7C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <SecondContent />
      <ThirdContent />
      <Footer />
    </div>
  )
}

export default Home