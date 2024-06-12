import { Container } from "components/atoms";
import HeroSection from "components/organisms/HeroSection/HeroSection";
import PopularServices from "components/organisms/PopularServices/PopularServices";
import TaskGenieProcess from "components/organisms/TaskGenieProcess";
import TestimonialsSection from "components/organisms/TestimonialsSection/TestimonialsSection";
import TaskGenieSection from "components/organisms/TaskGenieSection/TaskGenieSection";

const Home = () => {
	return (
		<Container
			maxWidth={"lg"}
			sx={{ padding: 0 }}
		>
			<HeroSection />
			{/* Popular Services */}
			<PopularServices />
			{/* Timeline */}
			<TaskGenieProcess />
			{/* Earn Money */}
			<TaskGenieSection />
			{/* Testimonials */}
			<TestimonialsSection />
		</Container>
	);
};

export default Home;
