import Nav from "@/components/nav";
import MyTechnologies from "./components/technologies";
import ContactMe from "./components/contact-me";
import MyCard from "./components/my-card";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-gradient-violet">
        <Nav></Nav>
        <div className="flex-1 justify-center md:flex md:w-full">
          <div className="md:flex md:w-5/6">
            <div className="flex-col justify-between p-4 md:w-2/5 md:flex">
              <MyCard></MyCard>
              <div className="mt-5">
                <ContactMe></ContactMe>
              </div>
            </div>

            <div className="p-4 lg:w-3/4">
              <div className="md:h-full">
                <MyTechnologies></MyTechnologies>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
