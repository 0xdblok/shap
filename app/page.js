import Image from "next/image";

import expect from "./img/expect.png"
import nothing from "./img/nothing.png"
import protocol from "./img/protocol.png"
import hero from "./img/hero.png"
import creating from "./img/creating.png"
import build from "./img/build.png"
import global from "./img/global.png"
import logo from "./img/logo.png"


export default function Home() {
  return (
    
    <div className="flex overflow-hidden flex-col min-h-[900px] w-full">
    <div className="flex flex-col  w-full w- bg-[#1E392B] max-md:max-w-full ">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-col w-full  max-md:max-w-full">
          <div className="flex flex-col justify-center w-full min-h-[768px] max-md:max-w-full">
            <div className="flex flex-col flex-1 w-full max-md:max-w-full">
              <div className="flex overflow-hidden justify-center items-center w-full min-h-[768px] max-md:max-w-full">
                <div className="flex flex-col self-stretch my-auto w-[1440px] max-md:max-w-full">
                  <div className="flex overflow-hidden flex-col w-full  min-h-[768px] max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                      <div className="flex flex-col w-full max-md:max-w-full">
                        <div className="px-20 pt-14 w-full bg-[#1E392B] max-md:px-5 max-md:max-w-full">
                          <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                              <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
                                <div className="flex items-start max-w-full w-[255px]">
                                  <div className="flex flex-col justify-center min-h-[80px]">
                                  
                                  </div>
                                  <div className="flex flex-col mt-8 w-full text-2xl font-bold tracking-tighter leading-none text-green-100 uppercase whitespace-nowrap min-h-[68px]">
                                    <div className="flex gap-4 items-start w-full">
                                      
                                      <Image
                                        width={55}
                                        height={55}
                                        alt="Shape"
                                        loading="lazy"
                                        src={logo}
                                        className="object-contain shrink-0 w-aspect-square"
                                      />
                                      <div className="flex flex-col mt-3 min-h-[55px]">
                                        <div className="flex flex-col justify-center py-px max-w-full min-h-[55px] w-[181px]">
                                          <div className="flex flex-col w-full">
                                            <div>Shape</div>
                                            <div>protocol</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col mt-12 ml-5 min-h-[565px] rotate-[3.141592653589793rad] max-md:mt-10 max-md:max-w-full">
                                  <div className="flex flex-col max-w-full w-[511px]">
                                    <div className="flex flex-col justify-center max-w-full min-h-[299px] rotate-[3.141592653589793rad] w-[299px]">
                                      <div className="flex overflow-hidden relative flex-col flex-1 justify-center w-full">
                                        <div className="flex z-0 flex-1 w-full min-h-[299px]" />
                                        <div className="flex absolute right-0 bottom-0 z-0 flex-col justify-center h-[299px] min-h-[299px] w-[299px]">
                                          <div className="flex flex-1 w-full min-h-[299px]" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col self-end max-w-full ">
                                      <div className="flex flex-col justify-center max-w-full rotate-[3.141592653589793rad] ">
                                        <div className="flex overflow-hidden relative flex-col flex-1 justify-center w-full">
                                          <div className="flex z-0 flex-col flex-1 w-full">
                                            
                                            <Image
                                              alt="Shape"
                                              width={599}
                                              height={599}
                                              loading="lazy"
                                              src={hero}
                                              className=" w-full aspect-square"
                                            />
                                           
                                          </div>
                                          <div className="flex absolute right-0 bottom-0 z-0 flex-col justify-center h-[292px] min-h-[292px] w-[292px]">
                                            <div className="flex flex-1 w-full min-h-[292px]" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col justify-center min-h-[130px] rotate-[-1.5707963267948966rad]">
                                        <div className="flex overflow-hidden relative flex-col flex-1 justify-center w-full">
                                          <div className="flex z-0 flex-col flex-1 w-full">
                                            <div className="flex w-full min-h-[130px]" />
                                          </div>
                                          <div className="flex absolute right-0 bottom-0 z-0 flex-col justify-center h-[130px] min-h-[130px] w-[361px]">
                                            <div className="flex flex-1 w-full min-h-[130px]" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                              <div className="flex flex-col items-start font-bold max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-col self-stretch text-8xl tracking-tighter text-green-100 leading-[83px] min-h-[277px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                                  <div className="flex flex-col justify-center py-3.5 max-w-full min-h-[277px] w-[580px] max-md:text-4xl max-md:leading-10">
                                    <div className="flex flex-col w-full max-md:max-w-full max-md:text-4xl max-md:leading-10">
                                      <div className="max-md:max-w-full max-md:text-4xl max-md:leading-10">
                                        Making all
                                        <br />
                                        things
                                        <br />
                                        accessible
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col mt-20 ml-2.5 max-w-full text-2xl tracking-tighter leading-8 text-white min-h-[62px] w-[413px] max-md:mt-10">
                                  <div className="flex flex-col w-full min-h-[62px]">
                                    <div className="flex flex-col w-full">
                                      <div>
                                        Feel the best experience in creating
                                        <br />
                                        accessible digital products on Plasma{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col mt-36 max-w-full text-xl tracking-tighter leading-5 text-center text-gray-800 min-h-[65px] w-[181px] max-md:mt-10">
                                  <div className="flex flex-col w-full">
                                    <div className="flex flex-col justify-center  w-full aspect-[2.828]">
                                   
                                     <a className="inline-flex items-center justify-center px-32 py-4 rounded-full bg-green-500 text-gray-900 font-semibold shadow hover:bg-green-400 active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50">
                                      Will be available soon!
                                      </a>
                                    
                                      <div className="flex relative flex-col min-h-[41px]">
                                        <div className="flex flex-col pt-1 w-full h-[41px]">
                                        
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex z-10 flex-col w-full bg-[#1E392B] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex overflow-hidden flex-col w-full  max-md:max-w-full">
            <div className="flex flex-col justify-center w-full min-h-[768px] max-md:max-w-full">
              <div className="flex flex-col flex-1 w-full max-md:max-w-full">
                <div className="flex overflow-hidden justify-center items-center w-full min-h-[768px] max-md:max-w-full">
                  <div className="flex flex-col self-stretch my-auto w-[1440px] max-md:max-w-full">
                    <div className="flex overflow-hidden flex-col w-full  min-h-[768px] max-md:max-w-full">
                      <div className="flex flex-col w-full max-md:max-w-full">
                        <div className="flex flex-col w-full max-md:max-w-full">
                          <div className="flex flex-col pl-20 w-full bg-[#1E392B] max-md:pl-5 max-md:max-w-full">
                            <div className="self-center w-full max-w-[1212px] max-md:max-w-full">
                              <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                  <div className="flex flex-col grow text-8xl font-bold tracking-tighter leading-none text-green-500 min-h-[111px] max-md:max-w-full max-md:text-4xl">
                                    <div className="flex flex-col justify-center max-w-full min-h-[111px] w-[596px] max-md:text-4xl">
                                      <div className="flex flex-col w-full max-md:max-w-full max-md:text-4xl">
                                        <div className="max-md:max-w-full max-md:text-4xl">
                                          Our Work
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                  <div className="flex flex-col grow mt-5 text-2xl tracking-tighter leading-8 text-white min-h-[93px] max-md:mt-10 max-md:max-w-full">
                                    <div className="flex flex-col max-w-full min-h-[93px] w-[596px]">
                                      <div className="flex flex-col w-full max-md:max-w-full">
                                        <div className="max-md:max-w-full">
                                          From small start-ups to fully bonded
                                          token, we are here
                                          <br />
                                          to help our clients create more
                                          inclusive digital
                                          <br />
                                          ecosystems for people, degen, and
                                          audience like you.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-5 justify-between items-center mt-12 max-md:mt-10">
                              <div className="flex flex-col self-stretch my-auto">
                                <div className="flex relative flex-col justify-center items-center px-20 py-20 w-full aspect-[1.204] max-md:px-5">
                                  <Image
                                    alt="Shape"
                                    width={171}
                                    height={171}
                                    loading="lazy"
                                    src={creating}
                                    className="object-cover absolute inset-0 size-full"
                                  />
                                  <div className="flex relative flex-col max-w-full min-h-[155px] rotate-[1.5707963267948966rad] w-[171px]">
                                    <div className="flex flex-col w-full max-w-[171px]">
                                      <div className="flex z-10 self-end max-w-full w-[126px]">
                                        <div className="flex flex-col justify-center self-end mt-6 min-h-[88px] rotate-[3.141592653589793rad] max-md:-mr-0.5">
                                          <div className="flex overflow-hidden relative flex-col flex-1 justify-center w-full">
                                            <div className="flex z-0 flex-col flex-1 w-full">
                                              <div className="flex w-full min-h-[88px]" />
                                            </div>
                                            <div className="flex absolute right-0 bottom-0 z-0 flex-col justify-center h-[88px] min-h-[88px] w-[88px]">
                                              <div className="flex flex-1 w-full min-h-[88px]" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-col justify-center min-h-[110px] rotate-[-1.5707963267948966rad]">
                                          <div className="flex overflow-hidden relative flex-col flex-1 justify-center w-full">
                                            <div className="flex z-0 flex-col flex-1 w-full">
                                              <div className="flex w-full min-h-[110px]" />
                                            </div>
                                            <div className="flex absolute right-0 bottom-0 z-0 flex-col justify-center h-[110px] min-h-[110px] w-[39px]">
                                              <div className="flex flex-1 w-full min-h-[110px]" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col justify-center mt-0 min-h-[91px] rotate-[3.141592653589793rad] w-[90px]">
                                        <div className="flex overflow-hidden relative flex-col flex-1 justify-center w-full">
                                          <div className="flex z-0 flex-col flex-1 w-full">
                                            <div className="flex w-full min-h-[90px]" />
                                          </div>
                                          <div className="flex absolute right-0 bottom-0 z-0 flex-col justify-center h-[91px] min-h-[91px] w-[91px]">
                                            <div className="flex flex-1 w-full min-h-[90px]" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col mx-5 mt-5 text-2xl font-bold tracking-tighter leading-8 text-green-100 min-h-[62px] max-md:mx-2.5">
                                  <div className="flex flex-col max-w-full min-h-[62px] w-[348px]">
                                    <div className="flex flex-col w-full">
                                      <div>
                                        Creating Accessible User
                                        <br />
                                        Experiences{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col self-stretch my-auto">
                                <div className="flex relative flex-col justify-center items-center px-20 py-20 w-full aspect-[1.21] max-md:px-5">
                                  <Image
                                    alt="Shape"
                                    width={171}
                                    height={171}
                                    loading="lazy"
                                    src={build}
                                    className="object-cover absolute inset-0 size-full"
                                  />
                                  <div className="flex relative flex-col max-w-full min-h-[155px] rotate-[1.5707963267948966rad] w-[171px]">
                                    <div className="flex flex-col w-full max-w-[171px]">
                                      <div className="flex z-10 self-end max-w-full w-[126px]">
                                        <div className="flex flex-col justify-center self-end mt-6 min-h-[88px] rotate-[3.141592653589793rad]">
                                          <div className="flex overflow-hidden relative flex-col flex-1 justify-center w-full">
                                            <div className="flex z-0 flex-col flex-1 w-full">
                                              <div className="flex w-full min-h-[88px]" />
                                            </div>
                                            <div className="flex absolute right-0 bottom-0 z-0 flex-col justify-center h-[88px] min-h-[88px] w-[88px]">
                                              <div className="flex flex-1 w-full min-h-[88px]" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-col justify-center min-h-[110px] rotate-[-1.5707963267948966rad]">
                                          <div className="flex overflow-hidden relative flex-col flex-1 justify-center w-full">
                                            <div className="flex z-0 flex-col flex-1 w-full">
                                              <div className="flex w-full min-h-[110px]" />
                                            </div>
                                            <div className="flex absolute right-0 bottom-0 z-0 flex-col justify-center h-[110px] min-h-[110px] w-[39px]">
                                              <div className="flex flex-1 w-full min-h-[110px]" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col justify-center mt-0 min-h-[91px] rotate-[3.141592653589793rad] w-[90px]">
                                        <div className="flex overflow-hidden relative flex-col flex-1 justify-center w-full">
                                          <div className="flex z-0 flex-col flex-1 w-full">
                                            <div className="flex w-full min-h-[90px]" />
                                          </div>
                                          <div className="flex absolute right-0 bottom-0 z-0 flex-col justify-center h-[91px] min-h-[91px] w-[91px]">
                                            <div className="flex flex-1 w-full min-h-[90px]" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col mx-6 mt-5 text-2xl font-bold tracking-tighter leading-8 text-green-100 min-h-[62px] max-md:mx-2.5">
                                  <div className="flex flex-col max-w-full min-h-[62px] w-[348px]">
                                    <div className="flex flex-col w-full">
                                      <div>
                                        Build with transparency and
                                        <br />
                                        trust
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col self-stretch my-auto">
                                <div className="flex relative flex-col justify-center items-center px-20 py-20 w-full aspect-[1.21] max-md:px-5">

                                
                                  <Image
                                    alt="Shape"
                                    width={171}
                                    height={171}
                                    loading="lazy"
                                    src={global}
                                    className="object-cover absolute inset-0 size-full"
                                  />
                                  <div className="flex relative flex-col max-w-full min-h-[155px] rotate-[1.5707963267948966rad] w-[172px]">
                                    <div className="flex items-start w-full">
                                      <div className="flex flex-col justify-center self-end mt-16 mr-0 min-h-[91px] rotate-[3.141592653589793rad] max-md:mt-10">
                                        <div className="flex overflow-hidden relative flex-col flex-1 justify-center w-full">
                                          <div className="flex z-0 flex-col flex-1 w-full">
                                            <div className="flex w-full min-h-[90px]" />
                                          </div>
                                          <div className="flex absolute right-0 bottom-0 z-0 flex-col justify-center h-[91px] min-h-[91px] w-[91px]">
                                            <div className="flex flex-1 w-full min-h-[90px]" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col justify-center my-auto min-h-[88px] rotate-[3.141592653589793rad] max-md:-mr-0.5">
                                        <div className="flex overflow-hidden relative flex-col flex-1 justify-center w-full">
                                          <div className="flex z-0 flex-col flex-1 w-full">
                                            <div className="flex w-full min-h-[88px]" />
                                          </div>
                                          <div className="flex absolute right-0 bottom-0 z-0 flex-col justify-center h-[88px] min-h-[88px] w-[88px]">
                                            <div className="flex flex-1 w-full min-h-[88px]" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col justify-center self-start min-h-[110px] rotate-[-1.5707963267948966rad]">
                                        <div className="flex overflow-hidden relative flex-col flex-1 justify-center w-full">
                                          <div className="flex z-0 flex-col flex-1 w-full">
                                            <div className="flex w-full min-h-[110px]" />
                                          </div>
                                          <div className="flex absolute right-0 bottom-0 z-0 flex-col justify-center h-[110px] min-h-[110px] w-[39px]">
                                            <div className="flex flex-1 w-full min-h-[110px]" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col mx-6 mt-5 text-2xl font-bold tracking-tighter leading-8 text-green-100 min-h-[62px] max-md:mx-2.5">
                                  <div className="flex flex-col max-w-full min-h-[62px] w-[348px]">
                                    <div className="flex flex-col w-full">
                                      <div>
                                        Global Accessibility and
                                        <br />
                                        liquidity burning
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                         
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex z-10 flex-col w-full bg-[#13DF72] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex overflow-hidden flex-col w-full  max-md:max-w-full">
            <div className="flex flex-col justify-center w-full min-h-[768px] max-md:max-w-full">
              <div className="flex flex-col flex-1 w-full max-md:max-w-full">
                <div className="flex overflow-hidden justify-center items-center w-full min-h-[768px] max-md:max-w-full">
                  <div className="flex flex-col self-stretch my-auto w-[1440px] max-md:max-w-full">
                    <div className="flex overflow-hidden flex-col w-full min-h-[768px] max-md:max-w-full">
                      <div className="flex flex-col w-full max-md:max-w-full">
                        <div className="flex flex-col w-full max-md:max-w-full">
                          <div className="flex flex-col items-start px-20 pt-14 pb-48 w-full bg-[#13DF72] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                            <div className="flex flex-col mb-0 w-full max-w-[1170px] max-md:mb-2.5 max-md:max-w-full">
                              <div className="flex flex-col max-w-full text-8xl font-bold tracking-tighter leading-none text-gray-800 h-[111px] w-[606px] max-md:text-4xl">
                                <div className="flex flex-col justify-center py-3.5 w-full min-h-[111px] max-md:text-4xl">
                                  <div className="flex flex-col w-full max-md:max-w-full max-md:text-4xl">
                                    <div className="max-md:max-w-full max-md:text-4xl">
                                      In the plateau
                                    </div>
                                  </div>
                                </div>
                              </div>
                             
                              <div className="mt-40 max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col">
                                  
                                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow text-2xl font-bold tracking-tighter leading-8 text-gray-800 min-h-[239px] max-md:mt-10">
                                      <div className="flex flex-col pt-36 max-w-full w-[342px] max-md:pt-24">
                                        <div className="flex z-10 flex-col min-h-[93px]">
                                          <div className="flex flex-col w-full min-h-[93px]">
                                                <Image
                                        width={150}
                                        height={150}
                                        alt="Shape"
                                        loading="lazy"
                                        src={protocol}
                                        className=""
                                      />
                                            <div className="flex flex-col w-full">
                                              <div>
                                                Shape protocol offers free
                                                <br />
                                                accessibility audits for
                                                <br />
                                                nonprofits
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow min-h-[237px] max-md:mt-10">
                                      <div className="flex flex-col max-w-full w-[342px]">
                                        <div className="flex flex-col justify-center max-w-full min-h-[121px] w-[139px]">
                                          <div className="flex overflow-hidden relative flex-col flex-1 justify-center w-full">
                                            <div className="flex z-0 flex-col flex-1 w-full">
                                              <div className="flex w-full min-h-[121px]" />
                                            </div>
                                            <div className="flex absolute right-0 bottom-0 z-0 flex-col justify-center h-[121px] min-h-[121px] w-[138px]">
                                              <div className="flex flex-1 w-full min-h-[121px]" />
                                            </div>
                                          </div>
                                        </div>
                                          <Image
                                        width={200}
                                        height={200}
                                        alt="Shape"
                                        loading="lazy"
                                        src={expect}
                                        className="flex items-center justify-center"
                                      />
                                        <div className="flex flex-col mt-6 text-2xl font-bold tracking-tighter leading-8 text-gray-800">
                                       
                                          <div className="flex flex-col w-full min-h-[92px]">
                                         
                                            <div className="flex flex-col w-full">
                                              
                                              <div>
                                                Expect for Global
                                                Accessibility
                                                <br />
                                                and security
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col min-h-[201px] max-md:mt-10">
                                      <div className="flex flex-col max-w-full w-[331px]">
                                        <div className="flex flex-col justify-center max-w-full min-h-[117px] w-[117px]">
                                          <div className="flex overflow-hidden relative flex-col flex-1 justify-center w-full">
                                            <div className="flex z-0 flex-col flex-1 w-full">
                                              <div className="flex w-full min-h-[117px]" />
                                            </div>
                                            <div className="flex absolute right-0 bottom-0 z-0 flex-col justify-center h-[117px] min-h-[117px] w-[117px]">
                                              <div className="flex flex-1 w-full min-h-[117px]" />
                                            </div>
                                          </div>
                                        </div>
                                        <Image
                                        width={200}
                                        height={200}
                                        alt="Shape"
                                        loading="lazy"
                                        src={nothing}
                                        className=""
                                      />
                                        <div className="flex z-10 flex-col mt-7 text-2xl font-bold tracking-tighter leading-8 text-gray-800 min-h-[60px]">
                                          <div className="flex flex-col w-full min-h-[60px]">
                                            <div className="flex flex-col w-full">
                                              <div>
                                                It’s all about shape and
                                                <br />
                                                nothing else!
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex z-10 flex-col w-full bg-[#13DF72] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex overflow-hidden flex-col w-full  max-md:max-w-full">
            <div className="flex flex-col justify-center w-full min-h-[768px] max-md:max-w-full">
              <div className="flex flex-col flex-1 w-full max-md:max-w-full">
                <div className="flex overflow-hidden justify-center items-center w-full min-h-[768px] max-md:max-w-full">
                  <div className="flex flex-col self-stretch my-auto w-[1440px] max-md:max-w-full">
                    <div className="flex overflow-hidden flex-col w-full  min-h-[768px] max-md:max-w-full">
                      <div className="flex flex-col w-full max-md:max-w-full">
                        <div className="flex flex-col w-full max-md:max-w-full">
                          <div className="flex flex-col px-20 pt-16 pb-44 w-full bg-[#13DF72] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                            <div className="flex flex-wrap gap-5 justify-between items-start w-full font-bold tracking-tighter text-gray-800 max-w-[1238px] max-md:max-w-full">
                              <div className="flex flex-col self-start text-8xl leading-[83px] min-h-[277px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                                <div className="flex flex-col justify-center py-3.5 max-w-full min-h-[277px] w-[596px] max-md:text-4xl max-md:leading-10">
                                  <div className="flex flex-col w-full max-md:max-w-full max-md:text-4xl max-md:leading-10">
                                    <div className="max-md:max-w-full max-md:text-4xl max-md:leading-10">
                                      About Shape
                                      <br />
                                      Sustainable
                                      <br />
                                      Idea
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col self-end mt-64 text-8xl leading-none whitespace-nowrap h-[111px] max-md:mt-10 max-md:text-4xl">
                                <div className="flex flex-col justify-center py-3.5 max-w-full min-h-[111px] w-[355px] max-md:text-4xl">
                                  <div className="flex flex-col w-full max-md:text-4xl">
                                    <div className="max-md:text-4xl">
                                      Socials
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col mt-20 mb-0 max-w-full text-2xl tracking-tighter leading-8 text-black min-h-[93px] w-[596px] max-md:mt-10 max-md:mb-2.5">
                              <div className="flex flex-col w-full min-h-[93px]">
                                <div className="flex flex-col w-full max-md:max-w-full">
                                  <div className="max-md:max-w-full">
                                    We are shaping to make it shipped out to
                                    you! Building the
                                    <br />
                                    next generational bonding curve platform
                                    to be
                                    <br />
                                    accessible for all users on Plasma network
                                    etc.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    
  );
}
