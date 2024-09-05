import Nav from "@/src/components/reuseables/Nav";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function LandingPage() {
  const perks = [
    {
      icon: <Image src="/secure.svg" height={300} width={300} alt="secure" />,
      name: "Ultimate Data Privacy",
      description:
        "Your data is your own. SecureData uses Zero-Knowledge Proofs to verify your information without exposing it, ensuring maximum privacy.",
      Button: <a href="">Learn more</a>,
    },

    {
      icon: <Image src="/zaps.svg" height={300} width={300} alt="secure" />,
      name: "Blockchain Security",
      description:
        "Built on blockchain technology, SecureData ensures that your data is immutable and securely stored, free from unauthorized access.",
      Button: <a href="">Learn more</a>,
    },
    {
      icon: <Image src="/message.svg" height={300} width={300} alt="secure" />,
      name: "Decentralized Control",
      description:
        "Enjoy full control over your data. Decide who gets access and how much they can see, all through a user-friendly interface.",
      Button: <a href="">Learn more</a>,
    },
    {
      icon: <Image src="/smile.svg" height={300} width={300} alt="secure" />,
      name: "Seamless Integration",
      description:
        "Easily integrate SecureData with external platforms such as government services, financial institutions, and more, all while maintaining your privacy.",
      Button: <a href="">Learn more</a>,
    },
    {
      icon: <Image src="/twist.svg" height={300} width={300} alt="secure" />,
      name: "Cross-Platform Access",
      description:
        "Manage your data securely from any device—whether on desktop, tablet, or mobile—with a consistent and responsive experience.",
      Button: <a href="">Learn more</a>,
    },
    {
      icon: <Image src="/heart.svg" height={300} width={300} alt="secure" />,
      name: "Real-Time Notifications",
      description:
        "Stay informed with instant updates on data uploads, verification statuses, and access logs.",
      Button: <a href="">Learn more</a>,
    },
  ];
  return (
    <>
      <div>
        <div className="bg-[#00140F] p-5 sm:flex-col-1">
          <Nav />
          <div className=" bg-[#065646] my-10 flex justify-between lg:w-11/12 !mx-auto py-12 ml-5 rounded-lg sm:flex-col-1 ">
            <div className="flex justify-center px-12">
              <div className="flex flex-col justify-center">
                <h1 className="text-white  justify-center text-xl md:text-3xl lg:text-6xl mt-5 font-bold lg:w-[600px] ">
                  <span className="text-[#26FCD1]">Secure</span> Your Data,{" "}
                  Protect Your Privacy.
                </h1>
                <p className="text-white text-sm lg:text-base lg:mt-8">
                  Experience the Future of Data Management with <br />{" "}
                  Zero-Knowledge Proofs
                </p>
                {/* <div className="flex gap-3 mt-5 mr-5 justify-end">
                  <Input placeholder="Enter your email" />
                  <Button className="h-11">Get Started</Button>
                </div> */}
                <p className="text-white text-sm mt-3">
                  We care about your data in our{" "}
                  <a href="" className="underline-offset-1">
                    privacy policy.
                  </a>
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <Image src="/hero.svg" height={500} width={500} alt="hero" />
            </div>
          </div>
          <div className="p-8">
            <h1 className="text-white">Features</h1>
            <h1 className="lg:text-3xl text-xl text-white font-bold">
              Why Choose SecureData?
            </h1>
            <p className="text-white mt-1 w-5/12">
              SecureData is designed to handle a wide range of personal and
              professional information securely.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 bg-[#00140F] mt-8">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex shrink-8 flex justify-center">
                  <div className="h-16 w-16 items-center flex justify-center rounded-full">
                    {perk.icon}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-bold text-white">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground text-white">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="bg-[#04483A] lg:px-20 mx-auto lg:flex !items-center !justify-center gap-10 lg:gap-20 p-10">
          <div className="flex justify-center ">
            <Image
              src="/ma.svg"
              height={350}
              width={350}
              alt="ma"
              className="shrink-0"
            />
          </div>
          <div className="w-7/12">
            <div className=" ">
              <h1 className="lg:text-3xl text-bold text-white font-Inter">
                “The integration with government services has made my work so
                much easier. I can securely share verified documents with just a
                few clicks.”
              </h1>
              <h1 className="text-white font-bold mt-3">Jane D</h1>
              <p className="text-white text-sm">Financial Analyst</p>
            </div>
          </div>
        </section>

        <section className="bg-[#101a1f] text-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">
                Frequently asked questions
              </h1>
              <p className="text-[#cfcfcf]">
                Everything you need to know about the product and billing. Can’t
                find the answer <br /> you&apos;re looking for? Please{" "}
                <a href="#" className="text-[#6fcf97] hover:underline">
                  chat to our friendly team
                </a>
                .
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                {/* FAQ Item 1 */}
                <div className=" p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 flex items-center justify-center bg-[#3f5a63] rounded-full text-xl text-white font-bold">
                      <Image
                        src="/smile.svg"
                        height={200}
                        width={200}
                        alt="smile"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      What is SecureData DApp?
                    </h3>
                    <p className="text-[#cfcfcf]">
                      SecureData is a decentralized application (DApp) that
                      allows you to securely manage and verify your sensitive
                      data using advanced cryptographic techniques like
                      Zero-Knowledge Proofs (ZKP). It ensures that your data
                      remains private while still being verifiable.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 flex items-center justify-center bg-[#3f5a63] rounded-full text-xl text-white font-bold">
                      <Image
                        src="/arr.svg"
                        height={200}
                        width={200}
                        alt="smile"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      How does Zero-Knowledge Proof (ZKP) technology work?
                    </h3>
                    <p className="text-[#cfcfcf]">
                      ZKP allows for data verification without revealing the
                      actual data. It enables one party to prove to another that
                      a statement is true without conveying any additional
                      information beyond the fact that the statement is true. In
                      SecureData, this means your data can be verified without
                      exposing the details.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 flex items-center justify-center bg-[#3f5a63] rounded-full text-xl text-white font-bold">
                      <Image
                        src="/circle.svg"
                        height={200}
                        width={200}
                        alt="smile"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      What happens if my data verification fails?
                    </h3>
                    <p className="text-[#cfcfcf]">
                      If a verification attempt fails, you will be notified
                      immediately, and you can request a re-verification. The
                      platform will provide details on the failure, so you can
                      address any issues before trying again.
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <Image
                  src={"/images/laptop.svg"}
                  alt="Person working on a laptop"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#04483A] p-10 flex flex-col-1  justify-center">
          <div className="bg-white lg:flex p-10 rounded-lg flex flex-col-1">
            <div className="mt-5">
              <h1 className="lg:text-4xl text-2xl font-bold">
                Ready to take control of
                <br /> your data?
              </h1>
              <p className="mt-10 text-gray-700 text-xl">
                Whether you’re protecting personal documents or <br /> managing
                sensitive business information, <br />
                SecureData is the trusted solution for secure data <br />{" "}
                management.
              </p>
              <div className="mt-10 space-x-5">
                <Button variant={"ghost"}>Learn More</Button>
                <Button>Get Started</Button>
              </div>
            </div>
            <div className="mb-0 flex align-bottom">
              <Image src="mock.svg" height={600} width={600} alt="mock" />
            </div>
          </div>
        </section>
        <section>
          <footer className="bg-green-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="space-y-4">
                {/* <h2 className="text-lg font-bold">SecureData</h2> */}
                <div className="relative h-12 w-[150px] md:w-[197px]"></div>
                <p className="text-sm">
                  SecureData is designed to handle a wide range of personal and
                  professional information securely.
                </p>
              </div>

              {/* Product Links */}
              <div>
                <h3 className="text-md font-semibold mb-2">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:underline">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Solutions{" "}
                      <span className="bg-gray-800 text-xs py-1 px-2 rounded-full ml-1">
                        New
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Releases
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-md font-semibold mb-2">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:underline">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Help centre
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Subscribe Form */}
              <div className="mr-10">
                <h3 className="text-md font-semibold mb-2">Stay up to date</h3>
                <form className="flex  flex-col space-y-2 space-x-2 md:space-y-0 md:flex-row ">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 text-black rounded-md focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-8 border-t border-gray-600 pt-4 text-sm text-gray-400 text-center">
              <p>© 2024 SecureData. All rights reserved.</p>
              <div className="flex justify-center space-x-4 mt-2">
                <Link href="#" className="hover:underline">
                  Terms
                </Link>
                <Link href="#" className="hover:underline">
                  Privacy
                </Link>
                <Link href="#" className="hover:underline">
                  Cookies
                </Link>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
