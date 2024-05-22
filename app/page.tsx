import Image from "next/image";
import ImageSlider from "@/components/index";
import CardBackGroundComponent from "@/components/Cardbackground";


export default function Home() {
  return (
      <main className=" min-h-screen flex items-center justify-center ">
        <header className="w-full fixed top-0 z-50 bg-gray-800  text-white py-4 flex justify-between items-center">
          <p className="text-xl font-bold ml-2"> CPT 캡틴 유도관</p>
          <nav>
            <ul className="flex space-x-4 mr-2">
              <li><p className="text-xs">소개</p></li>
              <li><p className="text-xs">프로필</p></li>
              <li><p className="text-xs">목표</p></li>
              <li><p className="text-xs">시설 사진</p></li>
              <li><p className="text-xs">오시는길</p></li>
            </ul>
          </nav>
        </header>

        <div className="flex flex-col w-full relative ">
          <div className="bg-white h-screen flex items-center justify-center relative">
            <div className="">
              <p className="px-4 mt-[-10rem] font-bold text-9xl">CAPTAIN JUDO </p>
              <p className="text-right font-bold font text-2xl mr-14"> 유능제강 </p>
              <p className="text-right font-bold text-2xl  mt-4 mr-14"> 예시예종 </p>
            </div>
            <div className="flex space-x-3 absolute bottom-4 right-4">
              <button className="bg-yellow-300 rounded-xl w-12 h-12"></button>
              <button className="bg-purple-500 rounded-xl w-12 h-12"></button>
            </div>
          </div>

          <div className="bg-red-200 h-screen flex items-center justify-center m-4">
            <div className="
              bg-white text-black rounded-2xl w-full shadow-lg p-5 flex-col inline-flex ">관장님 소개
              <Image src="/img/Profile.jpg" alt="test" width={200} height={200}/>
              <p className="text-xs font-medium py-5">
                [용. 인. 시. 최. 초. 부. 부. 유. 도. 장]
              </p>
            </div>
          </div>
          <div className="bg-white h-screen flex items-center justify-center">
            <div className="text-orange-500 text-2xl"> 채육관 목표
              <p> 다이어트 </p>
              <p> 호신술 </p>
            </div>
          </div>
          <div className="bg-gray-200 h-screen flex items-center justify-center">
            <div className="text-black text-2xl">
              <ImageSlider/>
            </div>
          </div>
          <div className="bg-white h-screen flex items-center justify-center">
            <div className="text-orange-500 text-2xl"> 오시는길
            </div>
          </div>
          <div className="w-full fixed bottom-0 bg-gray-700 flex justify-center">
            <p className="text-xl font-bold ml-2 text-white">footer</p>
          </div>
          <div className="w-full fixed bottom-0 bg-gray-700 flex justify-center">
            <p className="text-xl font-bold ml-2 text-white">footer</p>
          </div>
        </div>
      </main>
  );
}
