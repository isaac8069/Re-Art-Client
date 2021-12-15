import Tag from "../../Tag"
import CarouselImage from "../../homeComponents/Carousel"
import Cards from "../../homeComponents/Cards"
import PlansSection from "../../homeComponents/Plans"
import Community from "../../homeComponents/Community"



const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<div>
				<CarouselImage />
			</div>
			<div>
				<Cards />
			</div>
			<div>
				<PlansSection />
			</div>
			<div>
				<h1 className="text-center">From Our Community</h1>
				<Community />
			</div>
			<div>
				{/* <Tag /> */}
			</div>
		</>
	)
}

export default Home
