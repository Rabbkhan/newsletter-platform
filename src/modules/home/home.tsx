import Header from "@/shared/widgets/header";
import Banner from "./elements/banner";
import Benefits from "./elements/benefits";
import Pricing from "./elements/pricing";
import Footer from "@/shared/widgets/footer";
import FeatureHighlight from "./elements/feature.highlight";
import Branding from "./elements/branding";

const home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
      <Pricing />
      <Footer />
    </div>
  );
};
export default home;
