import react from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import About from './About';
import Rating from './Rating';
import Footer from './Footer';


function Home()
{
    return(
        <div>
            <Navbar />
            <Carousel />
            <About />
            <Rating />
            <Footer />
        </div>
    )

}
export default Home;